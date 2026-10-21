import "./usuario.scss";
import { Link } from "react-router-dom";

export default function Usuario() {

    function enviar() {
        alert("Currículo enviado com sucesso!");
    }

    return (
        <div className="usuario">

            <h1>Formulário de Emprego</h1>

            <form onSubmit={enviar}>

                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                />

                <label>Sobrenome:</label>
                <input
                    type="text"
                    placeholder="Digite seu sobrenome"
                />

                <label>E-mail:</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                />

                <label>Telefone:</label>
                <input
                    type="tel"
                    placeholder="Digite seu telefone"
                />

                <label>Data de nascimento:</label>
                <input type="date" />

                <h2>Escolha a vaga:</h2>

                <label>
                    <input type="radio" name="vaga" value="desenvolvedor" />
                    Desenvolvedor
                </label>

                <label>
                    <input type="radio" name="vaga" value="suporte" />
                    Suporte Técnico
                </label>

                <label>
                    <input type="radio" name="vaga" value="redes" />
                    Técnico de Redes
                </label>

                <label>
                    <input type="radio" name="vaga" value="hardware" />
                    Técnico de Hardware
                </label>

                <label>Escolaridade:</label>
                <select>
                    <option>Ensino Fundamental</option>
                    <option>Ensino Médio</option>
                    <option>Ensino Técnico</option>
                    <option>Ensino Superior</option>
                </select>

                <label>Conte um pouco sobre você:</label>
                <textarea
                    placeholder="Digite suas experiências e habilidades"
                ></textarea>

                <button type="submit">
                    Enviar candidatura
                </button>

                <br />
                <br />

                <Link to="/contato">Voltar para Contato</Link>

            </form>

        </div>
    );
}