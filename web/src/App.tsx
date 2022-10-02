import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home as AdminHome } from "./admin"
import { Home as EmployeeHome } from "./employee"
import { AuthProvider } from "./contexts/AuthContext"
import { Login } from "./login"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='admin/home' element={<AdminHome />} />
          <Route path='employee/home' element={<EmployeeHome />} />
        </Routes>
        <ToastContainer style={{ fontSize: "1.5rem" }} />
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
