import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ListasProvider } from './context/ListasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ListasProvider>
  </React.StrictMode>
);
