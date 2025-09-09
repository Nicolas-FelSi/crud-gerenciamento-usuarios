import { Link } from "react-router";

function UserDataCell(user, handleRemoveUser) {
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.nome}</td>
      <td>{user.email}</td>
      <td>{user.data_nascimento}</td>
      <td className="d-flex gap-2">
        <Link className="btn btn-secondary">Visualizar</Link>
        <Link className="btn btn-warning">Editar</Link>
        <button className="btn btn-danger" onClick={() => handleRemoveUser(user.id)}>Excluir</button>
      </td>
    </tr>
  )
}

export default UserDataCell;