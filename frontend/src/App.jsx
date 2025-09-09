import { BrowserRouter, Routes, Route } from "react-router"
import ListUsers from "./pages/ListUsers"
import RegisterUser from "./pages/RegisterUser"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/listar" element={<ListUsers/>}/>
        <Route path="/cadastrar" element={<RegisterUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
