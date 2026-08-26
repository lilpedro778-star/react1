import "./index.css";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div>
      <h1 className="h1">Página de Contato</h1>
      <Link to="/"><p>Voltar para a página inicial</p></Link>

    </div>
  );
}