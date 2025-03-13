import Navbar from "../components/organisms/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import MovieDetails from "../pages/MovieDetails";


const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<PrivateRouter/>}>
        <Route path="" element={<MovieDetails/>}/>
        </Route>
      </Routes>
    </>
  );
};
export default AppRouter;
