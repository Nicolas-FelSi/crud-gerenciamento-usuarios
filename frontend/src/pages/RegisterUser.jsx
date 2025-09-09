import { Link } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import createUser from "../api/createUser";

function RegisterUser() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    data_nascimento: "",
    senha: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleCreateUser(e) {
    e.preventDefault();
    await createUser(formData);
  }

  return (
    <div>
      <Header />
      <main className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="m-0 fs-4">Cadastro de usuário</h2>
            <Link to="/listar" className="btn btn-primary">
              Voltar
            </Link>
          </div>
          <form className="p-3" onSubmit={handleCreateUser}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                onChange={handleChange}
                name="nome"
                value={formData.nome}
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="data_nascimento" className="form-label">
                Data de nascimento
              </label>
              <input
                onChange={handleChange}
                name="data_nascimento"
                value={formData.data_nascimento}
                type="date"
                className="form-control"
                id="data_nascimento"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                onChange={handleChange}
                name="senha"
                value={formData.senha}
                type="password"
                className="form-control"
                id="senha"
                placeholder="*****"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegisterUser;
