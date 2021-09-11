const router = require("express").Router();
const playerModel = require("../models/player.model");

router.route("/:id").get((req, res) => {
  let id = req.params.id;
  console.log(id);
  playerModel
    .findById(id)
    .then((response) => {
      console.log(response);
      res.send({ status: "data Found", data: response });
    })
    .catch((err) =>
      res.status(400).send({ status: "Error occured", data: err })
    );
});

module.exports = router;
