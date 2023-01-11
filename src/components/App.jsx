import './App.css';

//router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

//Componentes
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <DarkModeProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Blessed Tienda Online"}/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </DarkModeProvider>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
