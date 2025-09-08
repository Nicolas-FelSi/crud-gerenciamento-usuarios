import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crud_gerenciamento_usuarios"
})

export default pool;