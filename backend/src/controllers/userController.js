import * as userService from "../services/userService.js"

async function getUsers(req, res) {
  const users = await userService.getAll();
  res.status(200).json({ users })
}

async function getUserById() {
  
}

async function createUser(req, res) {
  const { nome, email, data_nascimento, senha } = req.body;
  try {
    await userService.create(nome, email, data_nascimento, senha);
    res.status(201).json({ sucesso: "Usuário criado com sucesso." });
  } catch (error) {
    res.status(400).json({ erro: "Erro ao cadastrar usuário." });
  }
}

async function updateUser() {
  
}

async function removeUser(req, res) {
  const { id } = req.params;
  try {
    await userService.remove(id);
    res.status(200).json({ sucesso: "Usuário deletado com sucesso." });
  } catch {
    res.status(404).json({ erro: "Usuário não encontrado." });
  }
}

export { getUsers, removeUser, createUser, getUserById, updateUser };