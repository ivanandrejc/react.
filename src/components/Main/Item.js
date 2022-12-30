import "./Main.css"
import { Link } from "react-router-dom"

export const Item = (props) => {

    return(
            <Link key={`${props.productos.id}`} className="item-div" to={`/item/${props.productos.id}`}>
                <div className="item-img-div">
                    <img src={props.productos.img} className="item-img"></img>
                </div>
                <div className="item-precio-div">
                    <p className="d-item-nombre">{props.productos.nombre}</p>
                    <p className="d-item-precio">{props.productos.precio}$</p>
                </div>
            </Link>
    )
}