const express = require("express");
const mongoosse = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());

//Importando rotas
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Conexão com DB
mongoosse.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Conectado ao DB!");
  }
);

app.listen(3000);
