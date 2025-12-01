import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();
    
    // Aquí deberías reemplazar con la lógica de autenticación real
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Guardar el estado de autenticación
      localStorage.setItem("auth", "true");
      // Redirigir a la página de listas
      navigate('/listas');
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: '1.75rem' }}>
      {/* Izquierda: Formulario de inicio de sesión */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <span style={{ width: '100%', maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#c2410c', marginBottom: '1rem' }}>
            Inicio de sesión
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Identifícate para continuar</p>
        </span>
        
        <form onSubmit={manejarSubmit} style={{ width: '100%', maxWidth: '26rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={{ marginTop: '0.25rem', display: 'block', width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 0rem 0.5rem 0.75rem', outline: 'none' }}
              placeholder="tuemail@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              style={{ marginTop: '0.25rem', display: 'block', width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.5rem 0rem 0.5rem 0.75rem', outline: 'none' }}
              placeholder="********"
              required
            />
          </div>
          
          <div>
            <button
              type="submit"
              style={{ width: '100%', backgroundColor: '#f97316', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div style={{ marginTop: '1.5rem', width: '100%', maxWidth: '28rem' }}>
          <p style={{ color: '#6b7280', textAlign: 'center' }}>o inicia sesión con</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', width: '100%' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', padding: '0.5rem 1rem', border: '1px solid #78350f', justifyContent: 'center', color: '#78350f', borderRadius: '0.5rem', width: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
                <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"/>
                <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"/>
                <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"/>
              </svg>
              Google
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', padding: '0.5rem 1rem', border: '1px solid #78350f', justifyContent: 'center', color: '#78350f', borderRadius: '0.5rem', width: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <rect width="512" height="512" rx="15%" fill="#1877f2"/>
                <path d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" fill="#ffffff"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        <p style={{ marginTop: '2rem', color: '#6b7280' }}>
          si aún no te registras{' '}
          <a href="/register" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '500' }}>
            Regístrate
          </a>
        </p>
      </div>

      {/* Derecha: Sección decorativa - Solo visible en pantallas medianas y grandes */}
      <div style={{ width: '50%', borderRadius: '1rem', display: 'none', position: 'relative', overflow: 'hidden', backgroundColor: '#f97316' }}>
        {/* Contenido decorativo aquí - imágenes y SVGs */}
      </div>
    </div>
  );
}

export default LoginPage;
