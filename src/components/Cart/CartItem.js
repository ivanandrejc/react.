import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const CartItem = (props) => {

    let {removeProduct} = useContext(CartContext)
    let {addProductCart} = useContext(CartContext)
    let {removeOneProduct} = useContext(CartContext)

    let [itemQuantity, setItemQuantity] = useState()
    let [totalItem, setTotalItem] = useState()

    useEffect(() => {
        const itemQuantityRefresh = () => {
            setItemQuantity(props.item.quantity)
            setTotalItem(props.item.precio * props.item.quantity)
        }
        itemQuantityRefresh()
    },[props.item.quantity])

    return(
        <>
        <div class="c-item-div">
            
            <img className="c-item-img" src={props.item.img}></img>
            <div className="c-props-div">
                <p className="c-item-p">{props.item.nombre}</p>
                <p className="c-item-p">{props.item.quantity} Unidades</p>
                <p className="c-item-p">{props.item.precio}$ Cada una</p>
                <p className="c-item-p"><b>Total: {props.item.precio * props.item.quantity}$</b></p>
                <div className="c-buttons-div">
                    <button className="c-button-add" onClick={() => addProductCart(props.item)}>+</button>
                    <button className="c-button-add" onClick={() => removeOneProduct(props.item)}>-</button>
                    <button className="c-button" onClick={() => removeProduct(props.item)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        </>
    )
} 