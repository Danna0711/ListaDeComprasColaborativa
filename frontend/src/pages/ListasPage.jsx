import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaResumen from '../components/ListaResumen';
import { obtenerListas, crearLista } from '../services/listasService';
import { ListasContext } from '../context/ListasContext';

function ListasPage() {
  const [listas, setListas] = useState([]);
  const [nombreNueva, setNombreNueva] = useState('');
  const [presupuestoNuevo, setPresupuestoNuevo] = useState(0);
  const { setListaActual } = useContext(ListasContext);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerListas().then((res) => setListas(res.data));
  }, []);

  const manejarCrear = async (e) => {
    e.preventDefault();
    const datos = {
      nombre: nombreNueva || 'Lista sin nombre',
      presupuesto: Number(presupuestoNuevo) || 0
    };
    const res = await crearLista(datos);
    setListas((prev) => [...prev, res.data]);
    setNombreNueva('');
    setPresupuestoNuevo(0);
  };

  const irADetalle = (lista) => {
    setListaActual(lista);
    navigate(`/listas/${lista.id}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h1>Listas de compras</h1>

      <form onSubmit={manejarCrear} style={{ marginBottom: '16px' }}>
        <h3>Crear nueva lista</h3>
        <div>
          <label>Nombre: </label>
          <input
            value={nombreNueva}
            onChange={(e) => setNombreNueva(e.target.value)}
          />
        </div>
        <div>
          <label>Presupuesto: </label>
          <input
            type="number"
            value={presupuestoNuevo}
            onChange={(e) => setPresupuestoNuevo(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>

      {listas.map((lista) => (
        <div key={lista.id} onClick={() => irADetalle(lista)} style={{ cursor: 'pointer' }}>
          <ListaResumen nombre={lista.nombre} presupuesto={lista.presupuesto} />
        </div>
      ))}
    </div>
  );
}

export default ListasPage;
