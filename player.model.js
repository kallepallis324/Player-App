const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  playerName: { type: String },
  from: { type: String },
  price: { type: String },
  isPlaying: { type: Boolean },
  championshipsWon: { type: Number },
  description: { type: String },
  logo: { type: String },
  photo: { type: String },
});

const playerModel = mongoose.model("cricketPlayers", playerSchema);

module.exports = playerModel;
