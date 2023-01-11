import { Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';


const CartWidget = () => {
    return (
        
            <ul className='navbar-nav me-auto'>
            
                <li className='nav-link'>
                    <Link to={'/cart'}><button><FaBeer/></button></Link>
                </li>
                <p>0</p>
            </ul>
        
    );
}

export default CartWidget;
