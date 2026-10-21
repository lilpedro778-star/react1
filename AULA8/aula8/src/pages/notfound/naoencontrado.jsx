import "./naoencontrado.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notfound">
            <img
                src="/assets/image/notfound.gif"
                alt="Ilustração de página não encontrada"
            />

            <div className="notfound-conteudo">
                <h1>404</h1>
                <h2>Página não encontrada!</h2>

                <p>
                    Ops! A página que você está procurando
                    não existe ou o endereço está incorreto.
                </p>

                <Link to="/" className="voltar">
                    ← Voltar para Home
                </Link>
            </div>
        </div>
    );
}