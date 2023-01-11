import Form from "../form/form";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";

//import { useDarkModeContext } from "../../context/DarkModeContext"; NO ANDA,PREGUNTAR A CODER

const Navbar = () => {

  //const {darkMode} = useDarkModeContext()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Blessed</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>
            <Form busqueda={"Buscar productos"}/>
          </div>
          <CartWidget/>
          <BotonDarkMode/>
        </div>
      </nav>
    );
}

export default Navbar;
