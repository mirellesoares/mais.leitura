const fs = require("node:fs")

fs.readFile("./arquivo1.txt", function (erro,resposta){

  console.log("error", erro);
  console.log("resposta", resposta.toString());

    fs.readFile("./arquivo2.txt", function (erro2, resposta2) {
      console.log("error2", erro2);
      console.log("resposta2", resposta2.toString());

      fs.readFile("./arquivo3.txt", function (erro3, resposta3) {
        console.log("error3", erro3);
        console.log("resposta3", resposta3.toString());
      });
    
    });
});

console.log("FIM");
