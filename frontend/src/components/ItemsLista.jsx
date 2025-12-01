import { useReducer } from 'react';

function itemsReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR':
      return [...state, action.payload];
    case 'TOGGLE_COMPRADO':
      return state.map((item) =>
        item.id === action.payload ? { ...item, comprado: !item.comprado } : item
      );
    case 'ELIMINAR':
      return state.filter((item) => item.id !== action.payload);
    case 'LIMPIAR':
      return [];
    default:
      return state;
  }
}

// Estado inicial con ejemplos
const itemsIniciales = [
  { id: 1, nombre: 'Leche', comprado: false },
  { id: 2, nombre: 'Pan', comprado: true },
  { id: 3, nombre: 'Huevos', comprado: false },
  { id: 4, nombre: 'Mantequilla', comprado: false },
  { id: 5, nombre: 'Manzanas', comprado: true }
];

function ItemsLista() {
  const [items, dispatch] = useReducer(itemsReducer, itemsIniciales);

  const agregarEjemplo = () => {
    const nuevo = {
      id: Date.now(),
      nombre: 'Producto de ejemplo',
      comprado: false
    };
    dispatch({ type: 'AGREGAR', payload: nuevo });
  };

  return (
    <div style={{ padding: '2rem', borderRadius: '0.5rem', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#374151', margin: 0 }}>Nombre de la lista</h2>
        <button
          onClick={agregarEjemplo}
          style={{ background: 'none', border: 'none', color: '#c2410c', cursor: 'pointer', padding: '0.25rem', fontSize: '1.5rem' }}
          aria-label="Agregar ítem"
        >
          +
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', padding: '0.75rem 0.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id={`item-${item.id}`}
                checked={item.comprado}
                onChange={() => dispatch({ type: 'TOGGLE_COMPRADO', payload: item.id })}
                style={{ marginRight: '0.75rem', width: '1rem', height: '1rem', accentColor: '#f97316', cursor: 'pointer' }}
              />
              <label
                htmlFor={`item-${item.id}`}
                style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#374151', 
                  cursor: 'pointer',
                  textDecoration: item.comprado ? 'line-through' : 'none',
                  opacity: item.comprado ? 0.6 : 1
                }}
              >
                {item.nombre}
              </label>
            </div>

            <button
              onClick={() => dispatch({ type: 'ELIMINAR', payload: item.id })}
              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '1.25rem', padding: '0.25rem' }}
              aria-label="Eliminar ítem"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemsLista;
