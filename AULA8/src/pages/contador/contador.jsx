import './contador.scss';

import { useState } from "react";

import { Link } from "react-router-dom";

export default function Contador() {

    const [contador, setcontador] = useState(0);

    function mais() {
        setcontador(contador + 1);
    }

    function menos() {
        if (contador != 0) {
            setcontador(contador - 1);
        }
    }

    function zerar() {
        if (contador != 0) {
            setcontador(contador - contador);
        }
    }

    function vz() {
        setcontador(contador * 2);
    }

    return (
        <header className="cont1">

            <h1>Contador:</h1>

            <div className="cont2">

                <button onClick={mais}>+</button>

                {contador}

                <button onClick={menos}>-</button>

            </div>

            <button onClick={vz}>x2</button>

            <button onClick={zerar}>zerar</button>

            <br />

            <Link to="/">Voltar para Home</Link>

        </header>
    );
}
