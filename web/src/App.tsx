import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./admin"
import { AuthProvider } from "./contexts/AuthContext"
import { Login } from "./login"


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
