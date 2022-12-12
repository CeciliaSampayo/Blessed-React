import {useState} from 'react';

const ItemCount = (onAdd) => {
    const [contador,setContador]  = useState(1);

    const agregarAlCarrito = () => {
        onAdd(contador)
    }
    console.log(agregarAlCarrito)

    const sumar = () => contador < 10 && setContador(contador+1)
    const restar = () => contador > 1 && setContador(contador-1)


    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-light'>Agregar al carrito</button>
     
        
        </div>
    );
}

export default ItemCount;
