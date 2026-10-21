import "./evento.scss";
import { Link } from "react-router-dom";

export default function Evento() {  

 function alertar() {
    alert("Você Digitou!");
  }
  function enviar() {
    alert("Você passou o mouse em cima de Enviar!");
  }
  function numeroFavorito(e) {
    let numero = e.target.value
    alert("Seu numero favorito é: " + numero);
  }

    return (
        <div className="evento">
            <h1 >Formulário</h1>

            <form>
                <label>Digite algo em inglês:</label>
                <br />

                <input
                    type="text"
                    placeholder="Digite aqui"
                    onChange={alertar}
                />

                <br />

                <label>Digite seu numero favorito:</label>
                <br />

                <input
                    type="text"
                    placeholder="Digite seu numero favorito"
                    onChange={numeroFavorito}
                />


                <h2>Escolha uma opção:</h2>

                <label>
                    <input type="radio" name="opcao" value="1" />
                    Opção 1
                </label>

                <br />

                <label>
                    <input type="radio" name="opcao" value="2" />
                    Opção 2
                </label>

                <br />

                <label>
                    <input type="radio" name="opcao" value="3" />
                    Opção 3
                </label>

                <br />

                <label>
                    <input type="radio" name="opcao" value="4" />
                    Opção 4
                </label>

                <br /><br />

                <button type="submit" onMouseMove={enviar}>Enviar</button>

                 <br /><br />
                
                <Link to="/usuario">Ir para Usuário</Link>

                <br /><br />
                
                <Link to="/contato">Voltar para  Contato</Link>
            </form>
        </div>
    );
}

