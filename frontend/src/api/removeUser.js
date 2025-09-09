import URLBASE from "./urlBase.JS"

async function removeUsers(id) {
  const response = await fetch(`${URLBASE}/excluir/${id}`, {
    method: "delete"
  })

  return response.json();
}

export default removeUsers;