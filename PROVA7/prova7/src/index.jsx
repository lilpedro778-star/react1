import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Cabecalho from './pages/componentes/cabecalho/cabecalho.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho  />
  </React.StrictMode>
);
