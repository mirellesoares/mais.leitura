require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
livroRepository
.consultarTodos()
.then(function(resultado) {
    console.log(resultado);
})
.catch(function(error) {
    console.error("Deu ruim", erro);
});
  
