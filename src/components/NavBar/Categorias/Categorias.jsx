import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-link">
          <button className="btn btn-dark  "><Link to={"/"}>HOME</Link></button>
         
        </li>
  
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle btnNavbar" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item"><Link to={"/category/1"}>Collares</Link></button></li>
            <li><button className="dropdown-item"><Link to={"/category/2"}>Anillos</Link></button></li>
            
          
          </ul>
        </li>
      </ul>
    );
}

export default Categorias;
