const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, default: '' },
});

module.exports = mongoose.model('Word', wordSchema);
