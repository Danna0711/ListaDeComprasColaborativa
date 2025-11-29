const express = require('express');
const router = express.Router();

// Base de datos en memoria (solo para demo)
let listas = [
  { id: 1, nombre: 'Compra quincenal', presupuesto: 200000 },
  { id: 2, nombre: 'Fiesta de cumpleaños', presupuesto: 350000 }
];

// GET /api/listas  -> Obtener todas las listas
router.get('/', (req, res) => {
  res.json(listas);
});

// GET /api/listas/:id  -> Obtener una lista por id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const lista = listas.find((l) => l.id === id);

  if (!lista) {
    return res.status(404).json({ mensaje: 'Lista no encontrada' });
  }

  res.json(lista);
});

// POST /api/listas  -> Crear una nueva lista
router.post('/', (req, res) => {
  const { nombre, presupuesto } = req.body;

  if (!nombre || presupuesto == null) {
    return res.status(400).json({ mensaje: 'Nombre y presupuesto son obligatorios' });
  }

  const nueva = {
    id: Date.now(),
    nombre,
    presupuesto
  };

  listas.push(nueva);
  res.status(201).json(nueva);
});

// PUT /api/listas/:id  -> Actualizar una lista
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const { nombre, presupuesto } = req.body;

  const indice = listas.findIndex((l) => l.id === id);
  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Lista no encontrada' });
  }

  listas[indice] = {
    ...listas[indice],
    nombre: nombre ?? listas[indice].nombre,
    presupuesto: presupuesto ?? listas[indice].presupuesto
  };

  res.json(listas[indice]);
});

// DELETE /api/listas/:id  -> Eliminar una lista
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const existe = listas.some((l) => l.id === id);

  if (!existe) {
    return res.status(404).json({ mensaje: 'Lista no encontrada' });
  }

  listas = listas.filter((l) => l.id !== id);
  res.status(204).send();
});

module.exports = router;
