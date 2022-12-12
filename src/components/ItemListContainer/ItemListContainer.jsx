import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import consultarBDD from '../../assets/funciones.js'
//Consulta la Base de datos
const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

useEffect(() => {
 
consultarBDD().then(productList => {
    const cardProductos = ItemList({productList})
    setProductos(cardProductos)
    
    })
}, []);
console.log(productos)

    return (
    
            <div className="row cardProductos">{productos}</div>
        
    );
}

export default ItemListContainer;
