const express = require('express');
const Word = require('../models/Word');
const router = express.Router();

// Crear una palabra
router.post('/', async (req, res) => {
  try {
    const word = new Word(req.body);
    await word.save();
    res.status(201).json(word);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las palabras (con soporte de paginación y filtro)
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, type } = req.query;
  const query = type ? { type } : {};

  try {
    const words = await Word.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Word.countDocuments(query);
    res.json({ words, total, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una palabra por ID
router.put('/:id', async (req, res) => {
  try {
    const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(word);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar una palabra por ID
router.delete('/:id', async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.json({ message: 'Palabra eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
