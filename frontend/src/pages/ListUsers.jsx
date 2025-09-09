import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router"
import Header from "../components/Header";
import getUsers from "../api/getUsers";
import UserDataCell from "../components/UserDataCell"

function ListUsers() {
  const [users, setUsers] = useState([]);

  async function handleGetUsers() {
    const usersList = await getUsers();
    setUsers(usersList.users);
  }

  async function handleRemoveUser(id) {
    setUsers(users.filter(user => user.id != id));
  }

  useEffect(() => {
    handleGetUsers();
  }, [])

  return (
    <div>
      <Header/>
      <main className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="m-0 fs-4">Lista de usuários</h2>
            <Link to="/cadastrar" className="btn btn-primary">Adicionar usuário</Link>
          </div>
          <div className="p-3">
            { users.length != 0 
              ? 
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
                  {
                    users.map(user => (
                      <UserDataCell key={user.id} user={user} handleRemoveUser={handleRemoveUser}/>
                    ))
                  }
                </tbody>
              </table>
              :
              <p className="text-center m-0">Nenhum usuário cadastrado</p>
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default ListUsers;