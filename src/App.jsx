import { ToastContainer } from "react-toastify"
import AppRouter from "../src/router/AppRouter"
import AuthContext from "./context/AuthContext"

function App() {


  return (
    <div>
      <AuthContext>
      <ToastContainer/> 
        <AppRouter/>
      </AuthContext>
     
    </div>
  )
}

export default App
