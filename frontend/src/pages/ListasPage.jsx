import { useEffect, useState, useContext } from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaResumen from '../components/ListaResumen';
import { obtenerListas, crearLista } from '../services/listasService';
import { ListasContext } from '../context/ListasContext';

function ListasPage() {
  const [listas, setListas] = useState([]);
  const [nombreNueva, setNombreNueva] = useState('');
  const [presupuestoNuevo, setPresupuestoNuevo] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});
  const { setListaActual } = useContext(ListasContext);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerListas()
      .then((res) => setListas(res.data))
      .catch((error) => {
        console.error('Error al obtener listas:', error);
        setListas([]);
      });
  }, []);

  const manejarCrear = async (e) => {
    e.preventDefault();
    
    // Validación
    const nuevosErrores = {};
    if (!nombreNueva) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const datos = {
      nombre: nombreNueva,
      presupuesto: Number(presupuestoNuevo) || 0,
      categoria: categoria,
      descripcion: descripcion
    };
    
      // const res = await crearLista(datos);
      // const nuevaLista = res.data;
      // setListas((prev) => [...prev, nuevaLista]);
      
      // // Redirigir a la lista creada
      // setListaActual(nuevaLista);
      navigate(`/listas/${1}`);

  };

  const irADetalle = (lista) => {
    setListaActual(lista);
    navigate(`/listas/${lista.id}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#374151', marginBottom: '1.5rem' }}>
        Crear Listas
      </h2>
      
      <form onSubmit={manejarCrear} style={{ display: 'grid', gap: '0.75rem' }}>
        {/* Nombre y Categoría */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {/* Nombre */}
          <div>
            <label 
              htmlFor="name" 
              style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}
            >
              Nombre<span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={nombreNueva}
              onChange={(e) => setNombreNueva(e.target.value)}
              placeholder="Nombres"
              style={{ 
                display: 'block', 
                width: '100%', 
                border: '1px solid #d1d5db', 
                borderRadius: '0.5rem', 
                padding: '0.5rem 0rem 0.5rem 0.75rem', 
                outline: 'none' 
              }}
            />
            {errores.nombre && (
              <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errores.nombre}
              </p>
            )}
          </div>

          {/* Categoría */}
          <div>
            <label 
              htmlFor="category" 
              style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}
            >
              Selecciona una categoría
            </label>
            <select
              id="category"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={{ 
                display: 'block', 
                width: '100%', 
                border: '1px solid #d1d5db', 
                borderRadius: '0.5rem', 
                padding: '0.5rem 0rem 0.5rem 0.75rem', 
                outline: 'none' 
              }}
            >
              <option value="">Selecciona una categoría</option>
              <option value="limpieza">Limpieza</option>
              <option value="comida">Comida</option>
              <option value="hogar">Hogar</option>
            </select>
          </div>
        </div>

        {/* Presupuesto */}
        <div>
          <label 
            htmlFor="presupuesto" 
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}
          >
            Presupuesto
          </label>
          <input
            type="number"
            id="presupuesto"
            value={presupuestoNuevo}
            onChange={(e) => setPresupuestoNuevo(e.target.value)}
            placeholder="0.00"
            style={{ 
              display: 'block', 
              width: '100%', 
              border: '1px solid #d1d5db', 
              borderRadius: '0.5rem', 
              padding: '0.5rem 0rem 0.5rem 0.75rem', 
              outline: 'none' 
            }}
          />
        </div>

        {/* Descripción */}
        <div>
          <label 
            htmlFor="description" 
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}
          >
            Descripción
          </label>
          <textarea
            id="description"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Tu descripción aquí"
            rows={4}
            style={{ 
              display: 'block', 
              width: '100%', 
              border: '1px solid #d1d5db', 
              borderRadius: '0.5rem', 
              padding: '0.5rem 0rem 0.5rem 0.75rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Drag & Drop File Upload */}
        <div style={{ 
          border: '2px dashed #fb923c', 
          borderRadius: '0.5rem', 
          padding: '1.5rem', 
          textAlign: 'center', 
          backgroundColor: '#f3f4f6' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ color: '#f97316', marginBottom: '0.5rem' }}>
              📁
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Drag your file(s) to start uploading or click
            </p>
          </div>
        </div>

        {/* Botón Crear Lista */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button
            type="submit"
            style={{ 
              backgroundColor: '#f97316', 
              color: 'white', 
              padding: '0.5rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: '500', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'background-color 0.2s' 
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
          >
            Crear Lista
          </button>
        </div>
      </form>

      {/* Mostrar listas existentes */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151', marginBottom: '1rem' }}>
          Mis Listas
        </h3>
        {listas.map((lista) => (
          <div key={lista.id} onClick={() => irADetalle(lista)} style={{ cursor: 'pointer' }}>
            <ListaResumen nombre={lista.nombre} presupuesto={lista.presupuesto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListasPage;
