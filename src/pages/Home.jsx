import { useContext } from "react";
import MovieCard from "../components/molecules/MovieCard";
import { MoviePage } from "../context/MovieContext";


const Home = () => {

  const {movies}=useContext(MoviePage)
  return (
    <div className="bg-color5-dark flex justify-center flex-wrap">
    {movies.map((movie)=>
    <MovieCard key={movie.id} {...movie}/>)}    
  
    </div>
  );
};

export default Home;