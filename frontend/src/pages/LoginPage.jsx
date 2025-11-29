import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Sin autenticación real, solo navega a /listas
    navigate('/listas');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>Ingreso</h1>
      <form onSubmit={manejarSubmit}>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Clave:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
