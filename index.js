require("dotenv").config();
const { port } = require("pg/lib/defaults");
const livroRepository = require("./infra/repository/livro");
const http = require("node:http");

const server = http.createServer(function (req, res) {
  res.end("ok bem vindo");
});

const PORT = process.env.PORT || 3000;

server.listen(port,function() {
  console.log("inicializando servidor HTTP na porta " + port);
});