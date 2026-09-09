import './index.scss';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/contato.jsx';
import Evento from "./pages/eventos/evento.jsx";
import Usuario from "./pages/usuario/usuario.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contato" element={<Contato />} />
                  <Route path="/eventos" element={<Evento />} />
                  <Route path="/usuario" element={<Usuario />} />
            </Routes>
        </BrowserRouter>
    );
}