import './api.scss'
import { useState} from 'react'
import axios from 'axios'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx';


export default function Api() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState();

    async function buscarCep() {
        let URL=`https://viacep.com.br/ws/${cep}/json/`
        
        let resposta = await axios.get(URL)
        let dados = resposta.data
        let mensagem = `Endereço: ${dados.logradouro}, ${dados.bairro}, ${dados.localidade} - ${dados.uf}`
        setEndereco(mensagem);
    }

    return (
        <div className='api'>
            <Cabecalho titulo="Consulta CEP" />
            <input type="text" value={cep} onChange={e => setCep(e.target.value)} placeholder='Digite o CEP' />
            <button onClick={buscarCep}>Buscar</button>
            <p>{endereco}</p>

        </div>
    );
}