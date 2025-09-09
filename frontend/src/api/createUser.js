import URLBASE from "./urlBase.JS"

async function createUser(user) {
  const { nome, email, data_nascimento, senha } = user;
  const response = await fetch(URLBASE + "/cadastrar", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
      data_nascimento,
      senha
    })
  })

  return response.json();
}

export default createUser;