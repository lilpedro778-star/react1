
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <h1>Olá, Mundo!</h1>
       <Link to="/contato"><p>Ir para a página de contato</p></Link>

    </div>
  );
}

export default App;
