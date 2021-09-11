const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const atlas_uri = process.env.ATLAS_URI;
mongoose.connect(atlas_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection successful!");
});

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

const playerRouter = require("./Routers/playerRouter");
const detailsRouter = require("./Routers/detailsRoter");
//routers
app.use("/players", playerRouter);
app.use("/playerdetails", detailsRouter);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
