import './componets/NavBar/NavBar'
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount';
import './App.css'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
