import './App.css';
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Blessed Tienda Online"}/>
      <ItemCount/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
