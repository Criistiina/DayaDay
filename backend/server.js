const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect("mongodb://localhost:27017/wordsDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conectado a la base de datos");
}).catch((error) => {
  console.log("Error de conexión a la base de datos:", error);
});

// Esquema de palabra
const wordSchema = new mongoose.Schema({
  name: String,
  type: String,
  subtype: String,
  image: String,
});

const Word = mongoose.model("Word", wordSchema);

// Rutas API
app.get("/arasac/:type", async (req, res) => {
  const { type } = req.params; // tipo de pictograma (actions, verbs, etc.)

  try {
    // Hacemos la solicitud a la API de ARASAAC
    const response = await axios.get(`https://api.arasaac.org/api/pictograms/${type}`);
    res.json(response.data); // Devolvemos la respuesta al front-end
  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos de ARASAAC", error });
  }
});


// Obtener datos de ARASAAC
app.get("/arasac/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const response = await axios.get(`https://api.arasaac.org/api/pictograms/${type}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos de ARASAAC", error });
  }
});

// Agregar nueva palabra
app.post("/words", async (req, res) => {
  const newWord = new Word(req.body);

  try {
    await newWord.save();
    res.status(201).json(newWord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
