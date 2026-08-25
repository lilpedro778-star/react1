import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import Naoencontrado from './pages/naoencontrado/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />;
        <Route path="/Contato" element={<Contato />} />;
        <Route path="*" element={<Naoencontrado />} />;
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

