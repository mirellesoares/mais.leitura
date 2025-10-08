require("dotenv").config();
console.log(process.env);
const {query} = require("./infra/database");

console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

query("SELECT 1+1;")
.then(function(value) {
  console.log(value);
})
.catch(function(err) {
  console.log("Deu ruim", err);
});
