const readFile = require("node:readline");
const terminal = readFile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminal.question("Qual seu nome: /n", function (valor){
//   console.log("seja bem vindo " + valor);
// })

function question(pergunta){
  const promise = new Promise(function(resolve, reject) {
    terminal.question(pergunta, function(valor) {
      resolve(valor);
    });
  });
  return promise;
}
question("Qual seu nome? \n")
.then(function(nome) {
  console.log("nome: " + nome);
})
.catch(function(erro) {
  console.log("Deu erro: " + erro);
})
.finally(function() {
  terminal.close();
});
// terminal.question("Qual seu nome: /n", function (valor){
//   console.log("seja bem vindo " + valor);
// })