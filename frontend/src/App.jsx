import { BrowserRouter, Routes, Route } from "react-router"
import ListUsers from "./pages/ListUsers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUsers/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
