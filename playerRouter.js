const router = require("express").Router();
const playerData = require("../data/tempdata");
const playerModel = require("../models/player.model");
router.route("/").get((req, res) => {
  playerModel
    .find()
    .then((response) => res.send({ status: true, data: response }))
    .catch((err) => res.status(400).send({ status: false, error: err }));
});

router.route("/").post((req, res) => {
  let newPlayer;
  playerData.map((data) => {
    const {
      playerName,
      from,
      price,
      isPlaying,
      championshipsWon,
      description,
      logo,
      photo,
    } = data;
    newPlayer = new playerModel({
      playerName,
      from,
      price,
      isPlaying,
      championshipsWon,
      description,
      logo,
      photo,
    });
    newPlayer
      .save()
      .then((response) => res.send({ status: "data inserted", data: response }))
      .catch((err) => res.send({ status: "error occured", data: err }));
  });
});

module.exports = router;
