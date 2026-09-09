
import './App.scss';
import { Link } from 'react-router-dom';

  function App(){
    return (
      <div className="App">
        <h1>Minha App</h1>
        <img src="./assets/image/OIPtele.webp" alt="gif" />
        <Link to="/contato">Ir para Contato</Link>
      </div>
    );
  }

export default App;
