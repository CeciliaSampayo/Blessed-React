import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NEW IN</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" href="#">Aros</button></li>
            <li><button className="dropdown-item" href="#">Collares</button></li>
            <li><button className="dropdown-item" href="#">Pulseras</button></li>
            <li><button className="dropdown-item" href="#">Anillos</button></li>
          
          </ul>
        </li>
      </ul>
    );
}

export default Categorias;
