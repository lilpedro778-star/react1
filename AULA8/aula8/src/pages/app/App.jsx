import './App.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx';

  function App(){
    return (
      <div className="App">
        <Cabecalho titulo="Minha App" />
        <img src="./assets/image/OIPtele.webp" alt="gif" />
        <Link to="/contato">Ir para Contato</Link>
        <Link to="/eventos">Ir para Eventos</Link>
        <Link to="/usuario">Ir para Usuário</Link>
        <Link to="/contador">Ir para Contador</Link>
        <Link to="/contador2">Ir para Contador2</Link>
        <Link to="/hobbie">Ir para Hobbie</Link>
        <Link to="/calculadora">Ir para Calculadora</Link>
        <Link to="/calculadora2">Ir para Calculadora2</Link>
        <Link to="/api">Ir para APICEP</Link>
        <Link to="/ingressos">Ir para Ingressos</Link>
      </div>
    );
  }
    
export default App;
