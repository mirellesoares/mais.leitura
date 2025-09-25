const { Client } = require("pg");

async function query(sql, args = []) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "Mirelle",
    database: "maisleitura",
    password: "1234",
  });
  await client.connect();

  const res = await client.query(sql, args);

  await client.end();
  return res.rows;
}

module.exports = { query };