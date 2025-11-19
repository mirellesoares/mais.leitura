require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  const livrosTops = await livroRepository.consultaTops();
  const livrosMaisAdquiridos = await livroRepository.consultaMaisAdquiridos();
  const livrosCurtidos = await livroRepository.consultaCurtidas();

  let itensTops = "";
  for (livro of livrosTops) {
    itensTops += `<li>${livro.titulo}</li>`;
  }

  let itensMaisAdquiridos = "";
  for (livro of livrosMaisAdquiridos) {
    itensMaisAdquiridos += `<li>${livro.titulo}</li>`;
  }

  let itensCurtidos = "";
  for (livro of livrosCurtidos) {
    itensCurtidos += `<li>${livro.titulo}</li>`;
  }

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <p>Itens Tops</p>
    <ul>
    ${itensTops}
    </ul>

    <p>Itens mais adquiridos</p>
    <ul>
    ${itensMaisAdquiridos}
    </ul>
  </body>
</html>`;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Inicializando server");
});