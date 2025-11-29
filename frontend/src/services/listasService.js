import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export function obtenerListas() {
  return api.get('/listas');
}

export function obtenerLista(id) {
  return api.get(`/listas/${id}`);
}

export function crearLista(datos) {
  return api.post('/listas', datos);
}

export function actualizarLista(id, datos) {
  return api.put(`/listas/${id}`, datos);
}

export function eliminarLista(id) {
  return api.delete(`/listas/${id}`);
}
