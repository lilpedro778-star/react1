import './calculadora2.scss';
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Calculadora() {
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [resultado, setresultado] = useState("")

    return (
        <div className="calc">
            <h1>Calculadora</h1>
            <input
                type="text"
                placeholder="Digite o primeiro número"
                value={num1}
                onChange={(e) => setnum1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Digite o segundo número"
                value={num2}
                onChange={(e) => setnum2(e.target.value)}
            />
            <div className="botoes">
                <button onClick={() => setresultado(Number(num1) + Number(num2))}>Somar</button>
                <button onClick={() => setresultado(Number(num1) - Number(num2))}>Subtrair</button>
                <button onClick={() => setresultado(Number(num1) * Number(num2))}>Multiplicar</button>
                <button onClick={() => setresultado(Number(num1) / Number(num2))}>Dividir</button>
                <button onClick={() => setresultado(Number(num1) ** Number(num2))}>Potência</button>
                <button onClick={() => setresultado(Number(num1) ** (1 / Number(num2)))}>Raiz</button>
                <button onClick={() => setresultado((Number(num1) * Number(num2)) / 100)}>Porcentagem</button>
                <button onClick={() => setresultado(Number(num1) % Number(num2))}>Resto</button>
                <button onClick={() => setresultado((Number(num1) + Number(num2)) / 2)}>Média</button>
                <button onClick={() => setresultado(Math.abs(Number(num1)))}>Absoluto</button>
            </div>
            <h2>Resultado: {resultado}</h2>
            <button onClick={() => { setnum1(""); setnum2(""); setresultado("") }}>Limpar</button>
            <br />
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}