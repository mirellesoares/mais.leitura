const {query} = require("../database");

async function consultarTodos(){
const sql = `SELECT * FROM livro`;
const resultados = await query(sql)
return resultados;

}
async function consultaTops(){
const sql = `SELECT * FROM livro WHERE top_livro = true`;
const resultados = await query(sql)
return resultados;
}
async function consultaMasAdquiridos(){
const sql = `SELECT * FROM livro WHERE livros_mas_adiquiridos = true`;
const resultados = await query(sql)
return resultados;
}
module.exports = { consultarTodos, consultaTops, consultaMasAdquiridos };
