import { useContext } from "react";
import MovieCard from "../components/molecules/MovieCard";
import { MoviePage } from "../context/MovieContext";

const Home = () => {
  const { movies } = useContext(MoviePage);

  return (
    <div className="bg-color7-light dark:bg-color5-dark min-h-screen p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
