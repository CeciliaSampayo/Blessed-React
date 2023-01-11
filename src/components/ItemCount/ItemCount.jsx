import {useState} from 'react';

const ItemCount = (onAdd) => {
    const [contador,setContador]  = useState(1);


    const sumar = () => contador < 10 && setContador(contador+1)
    const restar = () => contador > 1 && setContador(contador-1)

    const agregarAlCarrito = () => onAdd(contador)


    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-light' onClick={agregarAlCarrito}>Agregar al carrito</button>
     
        
        </div>
    );
}

export default ItemCount;
