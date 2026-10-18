import './calculadora.scss'; 
import { useState } from "react"; 
import { Link } from "react-router-dom"; 
 
export default function Calculadora() { 
    const [num1, setnum1] = useState(""); 
    const [num2, setnum2] = useState(""); 
    const [resultado, setresultado] = useState(""); 
 
    function somar() { 
        let soma = Number (num1) + Number (num2); 
        setresultado(soma); 
    } 
 
    function subtrair() { 
        let sub = Number (num1) - Number (num2); 
        setresultado(sub); 
    } 
 
    function multiplicar() { 
        let mult = Number (num1) * Number (num2); 
        setresultado(mult); 
    } 
 
    function dividir() { 
        let div = Number (num1) / Number (num2); 
        setresultado(div); 
    } 
 
    function potencia() { 
        let pot = Number (num1) ** Number (num2); 
        setresultado(pot); 
    } 
 
    function raiz() { 
        let raiz = Number (num1) ** (1/Number (num2)); 
        setresultado(raiz); 
    } 

    function porcentagem() {
    let por = (Number(num1) * Number(num2)) / 100;
    setresultado(por);
}

function resto() {
    let res = Number(num1) % Number(num2);
    setresultado(res);
}

function media() {
    let med = (Number(num1) + Number(num2)) / 2;
    setresultado(med);
}

function absoluto() {
    let abs = Math.abs(Number(num1));
    setresultado(abs);
}
 
    function limpar() { 
        setnum1(""); 
        setnum2(""); 
        setresultado(""); 
    }        
 
    return ( 
        <div className="calc"> 
            <h1>Calculadora</h1> 
            <input 
                type="text" 
                placeholder="Digite o primeiro número" 
                value={num1} 
                onChange={setnum1} 
            /> 
            <input 
                type="text" 
                placeholder="Digite o segundo número" 
                value={num2} 
                onChange={setnum2} 
            /> 
            <div className="botoes"> 
                <button onClick={somar}>Somar</button> 
                <button onClick={subtrair}>Subtrair</button> 
                <button onClick={multiplicar}>Multiplicar</button> 
                <button onClick={dividir}>Dividir</button> 
                <button onClick={potencia}>Potência</button> 
                <button onClick={raiz}>Raiz</button> 
                <button onClick={porcentagem}>Porcentagem</button> 
                <button onClick={resto}>Resto</button> 
                <button onClick={media}>Média</button> 
                <button onClick={absoluto}>Absoluto</button> 
            </div> 
            <h2>Resultado: {resultado}</h2> 
            <button onClick={limpar}>Limpar</button> 
            <br /> 
            <Link to="/">Voltar para Home</Link> 
        </div> 
    ); 
}