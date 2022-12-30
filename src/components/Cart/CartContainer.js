import './Cart.css'
import { CartContext } from '../../contexts/CartContext.js'
import { useContext } from 'react'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../utils/Firebase'
import Swal from 'sweetalert2'

export const CartContainer = () => {
    
    const {productCartList} = useContext(CartContext)

    const {totalPrice} = useContext(CartContext)

    const buy = (e) => {
        e.preventDefault()

        const order ={
            buyer:{
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            item:{
                items: productCartList,
                date: Date(),
                total: totalPrice
            }
        }

        const query = collection(db, "Orders")
        addDoc(query, order).then((response) => {
            Swal.fire({
                title:`Tu codigo de seguimiento es ${response.id}`,
                icon:'success'
            })
        })
    }

    const list = productCartList.map((item) =>
            <>
                <CartItem key={item.id} item={item}/>
            </>
            )

    return(
    <section className="c-section">
        {   
            productCartList.length > 0
            
            ?
            <>
            {list}
            <div className="c-precio-total-div">
                <p className="c-precio-total" >Precio Total: {totalPrice}$</p>
            </div>
            <form className="c-form" onSubmit={buy}>
                <input className="c-input" type="text" placeholder='Name' required></input>
                <input className="c-input" type="number" placeholder='Phone' required></input>
                <input className="c-input" type="email" placeholder='Email' required></input>
                <button type="submit" className="c-button-form">Buy</button>
            </form>

            </>
            : 
            <div class="c-msg-div">
                <p className="c-msg">No hay productos en el carrito</p>
                <Link to="/"><button className="c-msg-button" >Volver al menu</button></Link>
            </div>
        }
    </section>
    )
}