import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router"

function ListUsers() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("http://localhost:3000/", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })

    setUsers(await response.json());
  }

  useEffect(() => {
    getUsers();
  })

  return (
    <div>
      <header className="bg-dark text-white p-3">
        <h1 className="container-s fs-2 m-0">CRUD - Gerenciamento de usuários</h1>
      </header>
      <main className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="m-0 fs-4">Lista de usuários</h2>
            <Link to="/cadastrar" className="btn btn-primary">Adicionar usuário</Link>
          </div>
          <div className="p-3">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Data de Nascimento</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                { users.length != 0 && users.map(user => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.data_nascimento}</td>
                    <td className="d-flex gap-2">
                      <Link className="btn btn-secondary">Visualizar</Link>
                      <Link className="btn btn-warning">Editar</Link>
                      <button className="btn btn-danger">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ListUsers;