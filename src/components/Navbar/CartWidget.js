import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './Navbar.css'
import { CartContext } from '../../contexts/CartContext'

export const CartWidget = () => {

    let {cartQuantity} = useContext(CartContext)

    return(
        <div className="cart-div">
            <Link to="/cart" hidden={cartQuantity === 0}><i className="fa-solid fa-cart-shopping cart"></i></Link>
            <b hidden={cartQuantity === 0}>{cartQuantity}</b>
        </div>
    )
}