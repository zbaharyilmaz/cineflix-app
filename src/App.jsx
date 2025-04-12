import { ToastContainer } from "react-toastify";
import AppRouter from "../src/router/AppRouter";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient= new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <MovieContext>
            <ToastContainer />
            <AppRouter />
          </MovieContext>
        </AuthContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
