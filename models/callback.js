const fs = require("node:fs")

fs.readFile("./arquivo1.txt", function (error1,resposta1) {
  if (error1) {
    console.log("Erro ao ler arquivo1.txt:", error1);
    return
  }
    fs.readFile("./arquivo2.txt", function (error2, resposta2) {
      if (error2) {
        console.log("Erro ao ler arquivo2.txt:", error2);
        return
      }

      fs.readFile("./arquivo3.txt", function (error3, resposta3) {
        if (error3) {
          console.log("Erro ao ler arquivo3.txt:", error3);
          return
        }
        
        console.log(`${resposta1}${resposta2}${resposta3}`);
      });
    });
});

console.log("FIM");
