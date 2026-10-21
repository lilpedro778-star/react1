import "./input.scss";

export default function Input(props) {
    return (
        <input
            className="input"
            type={props.tipo}
            value={props.valor}
            onChange={props.aoMudar}
        />
    );
}