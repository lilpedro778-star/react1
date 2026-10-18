import "./contador2.scss";

import { Link } from "react-router-dom";

export default function Contador2() {

    let contador = 0;

    function mais() {

        alert("Contador: " + (contador + 1));

        contador++;

    }

    function menos() {

        if (contador != 0) {

            alert("Contador: " + (contador - 1));

            contador--;

        }

    }

    function zerar() {

        if (contador != 0) {

            alert("Contador: " + (contador - contador));

            contador = 0;

        }

    }

    return (

        <header className="cont10">

            <h1>Contador:</h1>

            <div className="cont20">

                <button onClick={mais}>+</button>

                {contador}

                <button onClick={menos}>-</button>

            </div>

            <button onClick={zerar}>zerar</button>

            <br />

            <Link to="/">Voltar para Home</Link>

        </header>

    );

}