import { ToastContainer } from "react-toastify";
import AppRouter from "../src/router/AppRouter";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";

function App() {
  return (
    <div>
      <AuthContext>
        <MovieContext>
          <ToastContainer />
          <AppRouter />
        </MovieContext>
      </AuthContext>
    </div>
  );
}

export default App;
