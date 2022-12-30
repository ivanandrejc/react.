import './Main.css'
import React, {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/Firebase'

export const ItemDetailContainer = () => {
    
    let idProducto = parseInt(useParams().idProducto)
    let [arrayItems, setArrayItems] = useState([])

    
    useEffect(() => {
        const getItem = async () => {
            try{
                const query = collection(db, "Items")
                const response = await getDocs(query)
                const docs = response.docs
                const data = docs.map(doc => {return{...doc.data(), id:doc.id}})
                return data
            }catch{
                console.log("Ocurrio un error");
            }
        }
        getItem()
        
        const funcionAsync = async ()=>{
            arrayItems = await getItem()
            let item = arrayItems.find(ele => parseInt(ele.id) === idProducto)
            setArrayItems(item)
        }
        funcionAsync()
    },[])
    
    return(
    <>
    
        {
            arrayItems &&
        <>
        <ItemDetail item={arrayItems}/>
        </>
        }
    </>
    )
}