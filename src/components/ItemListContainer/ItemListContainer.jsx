import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import consultarBDD from '../../assets/funciones.js'

//Consulta la Base de datos
const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
useEffect(() => {
 if(category) {

    consultarBDD('../json/productos.json').then(products => {
        const productList  = products.filter(prod => prod.stock > 0).filter(prod=> prod.idCategoria=== parseInt(category));
        const cardProductos = ItemList({productList});
        setProductos(cardProductos);
        });
    

 } else { 
    consultarBDD('./json/productos.json').then(productList => {
        const cardProductos = ItemList({productList})
        setProductos(cardProductos)
        
        })
 }

}, [category]);
console.log(productos)

    return (
    
            <div className="row cardProductos">{productos}</div>
        
    );
}

export default ItemListContainer;
