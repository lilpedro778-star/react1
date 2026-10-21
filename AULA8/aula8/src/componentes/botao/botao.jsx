import "./botao.scss";

export default function Botao(props) {
    return (
        <button
            className="botao"
            onClick={props.acao}
        >
            {props.texto}
        </button>
    );
}