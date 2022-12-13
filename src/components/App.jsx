import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Blessed Tienda Online"}/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
