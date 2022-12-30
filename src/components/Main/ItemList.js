import "./Main.css"
import { Item } from './Item'

export const ItemList = (props) => {
    return(
            <div className="items-div">
                {props.lista.map((ele) => {
                    return(
                        <Item key={ele.id} productos={ele}/>
                    )
                })}
            </div>
    );
}