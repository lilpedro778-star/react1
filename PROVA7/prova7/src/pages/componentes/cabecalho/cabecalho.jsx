import './cabecalho.scss'
import { useState } from 'react'
import OutroComponente from '../OutroComponente/image/image'

export default function Cabecalho() {

  const [conteudo1, setconteudo1] = useState('?13123') 
 const [velhotitulo, setvelhotitulo] = useState('?') 
    const [novotitulo, setnovotitulo] = useState('?') 

    function alterartitulo() {
    setvelhotitulo(conteudo1)
}

function alterardescricao() {
    setvelhotitulo(novotitulo)
}
    
    return (
        <div className='cabecalho'>

            <OutroComponente />

            <img src="./assets/image/OIP.webp" alt="" />

            <h1>{conteudo1}</h1>

            <input
                type="text"
                placeholder="Digite o título"
                value={conteudo1}
                onChange={(e) => setconteudo1(e.target.value)}
            />

              <button onClick={alterartitulo}>Alterar titulo1</button>

            <h2>{velhotitulo}</h2>

            <input
                type="text"
                placeholder="Digite o texto"
                value={novotitulo}
                onChange={(e) => setnovotitulo(e.target.value)}
            />

            <button onClick={alterardescricao}>Enviar</button>

        </div>
    )
}

