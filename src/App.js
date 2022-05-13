import './App.css';
import './componets/NavBar/NavBar'
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <ItemListContainer greeting="Catalogo de productos en proceso de diseño"/>
    </div>
  );
}

export default App;
