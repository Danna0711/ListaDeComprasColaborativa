import { useReducer } from 'react';

function itemsReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR':
      return [...state, action.payload];
    case 'TOGGLE_COMPRADO':
      return state.map((item) =>
        item.id === action.payload ? { ...item, comprado: !item.comprado } : item
      );
    case 'LIMPIAR':
      return [];
    default:
      return state;
  }
}

function ItemsLista() {
  const [items, dispatch] = useReducer(itemsReducer, []);

  const agregarEjemplo = () => {
    const nuevo = {
      id: Date.now(),
      nombre: 'Producto de ejemplo',
      comprado: false
    };
    dispatch({ type: 'AGREGAR', payload: nuevo });
  };

  return (
    <div>
      <h3>Ítems de la lista (useReducer)</h3>
      <button onClick={agregarEjemplo}>Agregar ítem de ejemplo</button>
      <button onClick={() => dispatch({ type: 'LIMPIAR' })} style={{ marginLeft: '8px' }}>
        Limpiar
      </button>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch({ type: 'TOGGLE_COMPRADO', payload: item.id })}
            style={{ cursor: 'pointer' }}
          >
            {item.nombre} {item.comprado && '(comprado)'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsLista;
