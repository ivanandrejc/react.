import "./Main.css"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"

export const ItemDetail = (props) => {

    const {addProduct} = useContext(CartContext)

    let [compra, setCompra] = useState(false)

    const onAdd = (quantity) => {
        let newProduct = {...props.item, quantity: quantity}
        addProduct(newProduct)
        setCompra(true)
    }

    return(
    <>
    <div className='detail-div'>
        <img className="detail-img" src={props.item.img}></img>
        <p className="detail-descripcion">{props.item.nombre}</p>
        <p className="detail-descripcion">{props.item.precio}$</p>
            <ItemCount initial="1" stock="10" onAdd={onAdd}/>
    </div>
        <Link to="/cart"><button hidden={!compra} className="finalizar-button">Finalizar Compra</button></Link>
    </>
    )
}