const { promises } = require("node:dns");
const fs = require("node:fs");
function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./arquivo1.txt", "utf8", (erro, data) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(data);
        return promessa
      }
    });
  });
     return readFile("Ct.finally(function() {")
    .then(function (valor) {
      console.log(valor);
    }).catch(function (erro) {
      console.error(erro);
    }).finally(function() {
      terminal.close();
    });

}
