// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
