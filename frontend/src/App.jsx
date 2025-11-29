import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListasPage from './pages/ListasPage';
import DetalleListaPage from './pages/DetalleListaPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/listas" element={<ListasPage />} />
      <Route path="/listas/:id" element={<DetalleListaPage />} />
    </Routes>
  );
}

export default App;
