import {useState} from "react"
import "./Main.css"


export const ItemCount = (props) => {
    
    let [productosNum, setProductosNum] = useState(parseInt(props.initial))

    const sumar = () => {
        if(productosNum < props.stock)
            setProductosNum(productosNum+1)
    }
    
    const restar = () => {
        if(productosNum > 1)
            setProductosNum(productosNum-1)
    }
    
    return(
        <>
        <div className="boton-div">
            <div className="item-count-div">
                <button disabled={props.stock === 0} className="boton" onClick={sumar}>+</button>
                <p className="numero">{productosNum}</p>
                <button disabled={props.stock===0} className="boton" onClick={restar}>-</button>
            </div>
                <button disabled={props.stock===0} className="detail-button" onClick={() => props.onAdd(productosNum)}>Agregar al carrito</button>
        </div>
        </>
    )
}
