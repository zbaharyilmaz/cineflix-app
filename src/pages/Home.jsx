import { useContext } from "react";
import MovieCard from "../components/molecules/MovieCard";
import { MoviePage } from "../context/MovieContext";
import { useState } from "react";
import Navbar from "../components/organisms/Navbar";

const Home = () => {
  const { movies, setSearch, loading } = useContext(MoviePage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setSearch("");
    } else {
      setInput(input);
    }
  };
  return (
    <div className="bg-color7-light dark:bg-color5-dark min-h-screen p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-2/4 justify-center items-center m-auto my-12"
      >
        <input
          type="text"
          placeholder="Search movies"
          className="w-2/4 p-2 border-b-2 border-gray-400 focus:border-blue-400 dark:border-gray-500 dark:focus:border-color7-light bg-transparent outline-none text-black dark:text-color6-lightgrey"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="m-2 px-4 py-2 text-xs w-15 bg-color2-lightblue text-white rounded-md hover:bg-color8-grey">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
        {movies.length > 0 ? (
          loading ? (
            <div>
              <div
                className="spinner-border animate-spin inline-block w-32 text-center h-8 border-1 rounded-full text-blue-600"
                role="status"
              >
                <span>...</span>
              </div>
            </div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )
        ) : (
          <p className="m-4">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
