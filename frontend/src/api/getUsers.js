import URLBASE from "./urlBase.JS"

async function getUsers() {
  const response = await fetch(URLBASE + "/listar", {
    method: "get"
  })

  return response.json();
}

export default getUsers;