function ListaResumen({ nombre, presupuesto }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
      <h3>{nombre}</h3>
      <p>Presupuesto: ${presupuesto}</p>
    </div>
  );
}

export default ListaResumen;
