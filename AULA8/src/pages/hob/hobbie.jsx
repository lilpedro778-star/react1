import "./hobbie.scss"; 
import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import Input from "../../componentes/input/input.jsx";
import Botao from "../../componentes/botao/botao.jsx";
 
export default function Hobbie() { 
 const [conteudo, setconteudo] = useState("Uma mão lava a outra"); 
 
 
    function mudar(e) { 
        setconteudo(e.target.value) 
    } 
 
    const [velhotitulo, setvelhotitulo] = useState('?') 
    const [novotitulo, setnovotitulo] = useState('?') 
    const [cor, setcor] = useState('#0f172a') 
 
    function pegartexto(e) { 
        let novotitulo = e.target.value; 
        setnovotitulo(novotitulo); 
    } 
     
    function mudarTitulo(e) { 
        setvelhotitulo(novotitulo); 
    } 
     
    function mudarCor(e) { 
        let novacor = e.target.value; 
        setcor(novacor); 
    } 
 
    return ( 
        <div 
        className="hob" 
        style={{
        background: `linear-gradient(135deg, ${cor}, #1e3a8a)`
    }}
>
            <h1>{conteudo}</h1> 
            <Input
                tipo="text"
                valor={conteudo}
                aoMudar={mudar}
            /> 
            <h1>{velhotitulo}</h1> 
            <Input
                tipo="text"
                valor={novotitulo}
                aoMudar={pegartexto}
            /> 
            <Botao
             texto="Mudar Título"   
            acao={mudarTitulo}
            /> 
 
            <h2>Sua cor de background é: {cor}</h2> 
            <input  
                type="color" 
                value={cor} 
                onChange={mudarCor} 
            /> 
 
            <Link to="/">Voltar para Home</Link> 
        </div> 
       
    ); 
}