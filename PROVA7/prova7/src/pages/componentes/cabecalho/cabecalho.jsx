import './cabecalho.scss'
import { useState } from 'react'
import OutroComponente from '../OutroComponente/OutroComponente'

export default function Cabecalho() {

 const [velhotitulo, setvelhotitulo] = useState('?') 
    const [novotitulo, setnovotitulo] = useState('?') 
    
    return (
        <div className='cabecalho'>

            <OutroComponente />

            <img src="./assets/image/OIP.webp" alt="" />

            <h1>{pegartituloantigo}</h1>

            <input
                type="text"
                placeholder="Digite o título"
                value={pegartituloantigo}
                onChange={(e) => settituloantigo(e.target.value)}
            />

            <button onClick={() => setPegarTexto2(pegartituloantigo)}>
                Alterar
            </button>

            <h2>{pegartexto2}</h2>

            <input
                type="text"
                placeholder="Digite o texto"
                value={pegartexto2}
                onChange={(e) => setPegarTexto2(e.target.value)}
            />

            <button onClick={() => setPegarTexto2(pegartexto2)}>
                Alterar
            </button>

        </div>
    )
}

