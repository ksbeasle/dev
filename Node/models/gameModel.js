const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  title: { type: String, default: '' },
  rating: String,
  releaseDate: Date,
  platform: { type: String, enum: ['X1X', 'XSX', 'PS4', 'PS5', 'PC', 'Nintendo'] },
});

module.exports = Game;
