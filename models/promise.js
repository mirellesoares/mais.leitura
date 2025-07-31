const readFile = require("node:readline");
const terminal = readFile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminal.question("Qual seu nome: /n", function (valor){
//   console.log("seja bem vindo " + valor);
// })

function question(pergunta){
  return new Promise(function(resolve, reject) {
    terminal.question(pergunta + "\n", function(valor) {
      resolve(valor);
    });
  });
}
question("Qual seu nome").then(function(valor) {
  console.log(`Seja bem-vindo ${valor}`);
})
.finally(function() {
  terminal.close();
});