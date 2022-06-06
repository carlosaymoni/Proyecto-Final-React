import './componets/NavBar/NavBar'
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componets/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">  
          <NavBar />
        </header>
        <Routes>
         <Route path='/' element={ <ItemListContainer /> }/>
         <Route path='/detail/:productoId' element={ <ItemDetailContainer/> }/>
         <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
         <Route path='/Cart' element={ <Cart/> }/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
