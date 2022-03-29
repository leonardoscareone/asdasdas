import './App.css';
import React, {useState, useEffect} from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import NavBarClass from './components/NavBarClass'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal';
import Card from './components/Card/Card';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    //JSX
    <div className="App">
     <NavBar />
      {/* <NavBarClass /> */}
      <ItemListContainer greeting="Bienvenidos a Valkyrie Clothes"/>
      <ListProducts>
        <p>Productos en Venta</p>
      </ListProducts>
    </div>
  );
}


export default App;
