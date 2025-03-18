import { useContext } from "react";
import MovieCard from "../components/molecules/MovieCard";
import { MoviePage } from "../context/MovieContext";

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
    <div className="bg-color7-light dark:bg-color5-dark min-h-screen w-full overflow-x-hidden p-1 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-2/4 justify-center items-center m-auto my-12"
      >
        <input
          type="text"
          placeholder="❤︎ movie ❤︎"
          className="w-3/5 p-2 border-b-2 border-gray-400 focus:border-blue-400 dark:border-gray-500 dark:focus:border-color7-light bg-transparent outline-none text-black dark:text-color6-lightgrey"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="m-2 px-4 py-2 text-xs w-15 bg-color2-lightblue text-white rounded-md hover:bg-color8-grey">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 place-items-center overflow-x-hidden">
        {movies.length > 0 ? (
          loading ? (
            <div className="flex justify-center">
              <div className="loading-text text-center ml-60 w-1/4">
                <span className="letter text-color1-pink">L</span>
                <span className="letter text-color1-pink">o</span>
                <span className="letter text-color1-pink">a</span>
                <span className="letter text-color1-pink">d</span>
                <span className="letter text-color1-pink">i</span>
                <span className="letter text-color1-pink">n</span>
                <span className="letter text-color1-pink">g</span>
                <span className="letter text-color1-pink">.</span>
                <span className="letter text-color1-pink">.</span>
                <span className="letter text-color1-pink">.</span>
              </div>
            </div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )
        ) : (
          <div className="flex justify-center">
            <div className="loading-text text-center ml-60 w-1/4">
              <span className="letter text-color1-pink">N</span>
              <span className="letter text-color1-pink">o</span>
              <span className="letter text-color1-pink">t</span>
              <span className="letter text-color1-pink"> </span>
              <span className="letter text-color1-pink">F</span>
              <span className="letter text-color1-pink">o</span>
              <span className="letter text-color1-pink">u</span>
              <span className="letter text-color1-pink">n</span>
              <span className="letter text-color1-pink">d</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
