const {query} = require("../database");

async function consultarTodos(){
const sql = `SELECT * FROM livro`;

const resultados = await query(sql)

return resultados;

}
async function consultarTodos(){
const sql = `SELECT * FROM livro WHERE top_LIVRO= true`;

const resultados = await query(sql)

return resultados;
} 
module.exports = { consultarTodos, consultarTodosEmDestaque };
