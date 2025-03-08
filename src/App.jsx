import { ToastContainer } from "react-toastify"
import Register from "./pages/Register"
import AppRouter from "../src/router/AppRouter"
import AuthContext from "./context/AuthContext"

function App() {


  return (
    <div>
      <AuthContext>
        <AppRouter/>
      <ToastContainer/> 
      </AuthContext>
     
    </div>
  )
}

export default App
