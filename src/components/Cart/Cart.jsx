import { Link } from "react-router-dom";
//import {useDarkModeContext} from "../../context/CarritoContext";
import { useCarritoContext } from "../../context/CarritoContex";
const Cart = () => {
    //const {darkMode} = useDarkModeContext()
    const { carrito } = useCarritoContext()

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <h1>Carrito vacio</h1>
                    <button className="btn btn-dark"><Link to={'/'}>Continuar comprando</Link></button>
                </>
                :
                <>
                <h1>productos</h1>
                <button className="btn btn-dark"><Link to={'/'}>Continuar comprando</Link></button>
                <button className="btn btn-dark"><Link to={'/checkout'}>Finalizar compra</Link></button>
                </>
                

            }
        </>
    );
}

export default Cart;



