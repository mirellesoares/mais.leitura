require("dotenv").config();
const { Console } = require("node:console");
const livroRepository = require("./infra/repository/livro");
const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  res.end("ok bem vindo");
});

const port = process.env.PORT || 3000;

server.listen(port,function() {
  console.log("inicializando servidor HTTP na porta " + port);
});