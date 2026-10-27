import './index.scss';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/contato.jsx';
import Evento from "./pages/eventos/evento.jsx";
import Usuario from "./pages/usuario/usuario.jsx";
import Contador from "./pages/contador/contador.jsx";
import Contador2 from "./pages/contador2/contador2.jsx";
import Calculadora from "./pages/calculadora/calculadora.jsx";
import Hobbie from "./pages/hob/hobbie.jsx";
import NotFound from './pages/notfound/naoencontrado.jsx';
import Api from './pages/chamadaapicep/api.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contato" element={<Contato />} />
                  <Route path="/eventos" element={<Evento />} />
                  <Route path="/usuario" element={<Usuario />} />
                  <Route path="/contador" element={<Contador />} />
                <Route path="/contador2" element={<Contador2 />} />
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/calculadora2" element={<Calculadora2 />} />
                <Route path="/hobbie" element={<Hobbie />} />
                <Route path="/api" element={<Api />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}