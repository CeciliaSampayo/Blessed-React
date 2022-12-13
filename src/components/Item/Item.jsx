import { Link } from "react-router-dom";

//Genero Card Producto
const Item = ({producto}) => {
    console.log(producto)
    return (
        <>
        <div className="card cardProducto">
  <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    <h2 className="card-title">{producto.informacion}</h2>
    <p className="card-text">${new Intl.NumberFormat(`de-DE`).format(producto.precio)}</p>
    <button className="btn btn-dark"><Link className="nav-link" to={`/producto/${producto.id}`}>Ver producto</Link></button>
  </div>
</div>

        </>
    );
}

export default Item;
