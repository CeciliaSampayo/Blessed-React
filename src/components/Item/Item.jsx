
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
    <p className="card-text">${producto.precio}</p>
    <a href="#" className="btn btn-dark">ver mas</a>
  </div>
</div>


        </>
    );
}

export default Item;
