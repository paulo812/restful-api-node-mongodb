const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

mongoose.set('useCreateIndex', true)

//Middleware
app.use(bodyParser.json());

//Importando rotas
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

//Conexão com DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Conectado ao DB com sucesso!");
  }
);

app.listen(3000, function () {
  console.log("listening on 3000");
});
