import "./Main.css"
import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/Firebase'
import Swal from "sweetalert2"

export const ItemListContainer = () => {

    let tipoProducto = useParams().tipoProducto

    let [lista, setLista] = useState([])
    
    
    
    useEffect(() => {
        const getData = async () => {
            try{
                const query = collection(db, "Items")
                const response = await getDocs(query)
                const docs = response.docs
                const data = docs.map(doc => {return{...doc.data(), id:doc.id}})
                return data
            }catch{
                Swal.fire({
                    title: "Ocurrio un error con los datos",
                    icon: "error"
                })
            }

        }
        getData()

        const funcionAsync = async ()=>{
            lista = await getData()
            if(tipoProducto){
                let nuevaLista = lista.filter(ele => ele.tipo === tipoProducto)
                setLista(nuevaLista)
            }else{
                setLista(lista)
            }
        }
        funcionAsync()
    },[tipoProducto])



    return(
        <>
        {
            lista[0] &&
            <>
            <ItemList lista={lista}/>
            </>
        }
        </>
    )
}