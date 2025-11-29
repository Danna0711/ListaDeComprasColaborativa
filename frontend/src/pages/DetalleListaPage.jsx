import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListasContext } from '../context/ListasContext';
import { obtenerLista } from '../services/listasService';
import EncabezadoLista from '../components/EncabezadoLista';
import ItemsLista from '../components/ItemsLista';

function DetalleListaPage() {
  const { id } = useParams();
  const { listaActual, setListaActual } = useContext(ListasContext);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      if (!listaActual || listaActual.id !== Number(id)) {
        setCargando(true);
        const res = await obtenerLista(id);
        setListaActual(res.data);
        setCargando(false);
      }
    };
    cargar();
  }, [id, listaActual, setListaActual]);

  if (cargando || !listaActual) {
    return <p>Cargando detalles de la lista...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <EncabezadoLista />
      <p>Presupuesto: ${listaActual.presupuesto}</p>
      <hr />
      <ItemsLista />
    </div>
  );
}

export default DetalleListaPage;
