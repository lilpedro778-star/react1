import "./ingressos.scss"; 
import {useState } from "react"; 
import { Link } from "react-router-dom"; 

const Preco_Do_ingresso=30;

export default function Ingressos(){
const [Qtd, setQtd]= useState(1);
const [Meia,setMeia]= useState(false);
const [Cupom, setCupom]= useState("");
const [Total, setTotal]= useState(0);

function information(){
 let valor= Qtd * Preco_Do_ingresso;

 if(Meia==true){
valor = valor / 2;

 }

if(Cupom.toLocaleUpperCase() == "QUERO50"){
 valor= valor * 0.5;

}

if(Cupom.toLocaleUpperCase() == "QUERO40"){
valor= valor * 0.6;

}

if(Cupom.toLocaleUpperCase() == "QUERO30"){
valor= valor * 0.7;

}

if(Cupom.toLocaleUpperCase() == "QUERO20"){
valor= valor * 0.8;

}

setTotal(valor);

}

return (
<div className="ingressos">
<div className="card">
<h1>Venda de Ingressos</h1>

    <div className="linha">
      <label>Quantidade:</label>
      <input
        type="number"
        min="1"
        value={Qtd}
        onChange={(e) => setQtd(Number(e.target.value))}
      />
    </div>

    <div className="linha">
      <label>Meia Entrada:</label>
      <input
        type="checkbox"
        checked={Meia}
        onChange={(e) => setMeia(e.target.checked)}
      />
    </div>

    <div className="linha">
      <label>Cupom:</label>
      <input
        type="text"
        value={Cupom}
        onChange={(e) => setCupom(e.target.value)}
      />
    </div>

    <div className="linha">
      <label></label>
      <button onClick={information}>Calcular</button>
    </div>

    <p className="total">
      O total é R$ {Total.toFixed(2).replace(".", ",")}
    </p>

    <Link to="/">Voltar para o início</Link>
  </div>
</div>

);
}
