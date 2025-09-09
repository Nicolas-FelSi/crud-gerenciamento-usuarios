import db from "../config/database.js"

async function getAll() {
  const [rows] = await db.query("SELECT id, nome, email, data_nascimento FROM usuarios");
  return rows;
}

async function getById(id) {
  const rows = await db.query("SELECT * from usuarios WHERE id = ?", [id]);
  return rows;
}

async function create(nome, email, data_nascimento, senha) {
  const rows = await db.query("INSERT INTO usuarios (nome, email, data_nascimento, senha) VALUES (?, ?, ?, ?)", [
    nome,
    email,
    data_nascimento,
    senha
  ])

  return rows;
}

async function update(id, data) {
  const rows = await db.query("UPDATE usuarios SET name = ?, email = ?, data_nascimento = ?, senha = ? WHERE id = ?", [
    data.nome,
    data.email,
    data.data_nascimento,
    data.senha,
    id
  ])
  return rows
}

async function remove(id) {
  await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
}

export { getAll, getById, create, update, remove };