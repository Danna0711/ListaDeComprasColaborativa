import { createContext, useState } from 'react';

export const ListasContext = createContext();

export function ListasProvider({ children }) {
  const [listaActual, setListaActual] = useState(null);

  const value = {
    listaActual,
    setListaActual
  };

  return <ListasContext.Provider value={value}>{children}</ListasContext.Provider>;
}
