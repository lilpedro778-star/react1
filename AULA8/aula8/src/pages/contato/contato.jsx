import "./contato.scss";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <img src="./assets/image/OIP.webp" alt="gif" />
      <Link to="/">Voltar para Home</Link>
      <Link to="/eventos">Ir para Eventos</Link>
    </div>
  );
}