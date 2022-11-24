import './App.css';
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Hola"}/>
      
    </>
  );
}

export default App;
