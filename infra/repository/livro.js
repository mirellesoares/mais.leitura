const { query } = require("../database");

async function consultarTodos() {
  const sql = `SELECT * FROM livro`;
  const resultados = await query(sql);
  return resultados;
}

async function consultaTops() {
  const sql = `SELECT * FROM livro WHERE top_livro = true`;
  const resultados = await query(sql);
  return resultados;
}

async function consultaMaisAdquiridos() {
  const sql = `SELECT * FROM livro WHERE livros_mas_adiquiridos = true`;
  const resultados = await query(sql);
  return resultados;
}

async function consultaCurtidas() {
  const sql = `SELECT * FROM livro 
  order by livros_curtida desc
  limit 5`;
  const resultados = await query(sql);
  return resultados;
}

module.exports = {
  consultarTodos,
  consultaTops,
  consultaMaisAdquiridos,
  consultaCurtidas
};
