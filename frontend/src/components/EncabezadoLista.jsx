import { useContext } from 'react';
import { ListasContext } from '../context/ListasContext';

function EncabezadoLista() {
  const { listaActual } = useContext(ListasContext);

  return (
    <header style={{ marginBottom: '16px' }}>
      <h2>
        Lista actual:{' '}
        {listaActual ? listaActual.nombre : 'Ninguna lista seleccionada'}
      </h2>
    </header>
  );
}

export default EncabezadoLista;
