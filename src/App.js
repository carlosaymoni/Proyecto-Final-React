import './componets/NavBar/NavBar'
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componets/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import Login from './componets/Login/Login';
import Footer from './componets/Footer/Footer'



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">  
            <NavBar />
          </header>
            <Routes>
              <Route path='/' element={ <ItemListContainer /> }/>
              <Route path='/detail/:productoId' element={ <ItemDetailContainer/> }/>
              <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
              <Route path='/cart' element={ <Cart/> }/>
              <Route path='/login' element={ <Login/> }/>
            </Routes>     
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
