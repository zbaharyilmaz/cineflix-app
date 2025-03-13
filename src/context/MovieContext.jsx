import { createContext } from "react";
import { tmdbApiKey } from "../auth/firebase";
import axios from "axios";
import { useState, useEffect } from "react";

export const MoviePage = createContext();

const MovieContext = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const takeMovies = async () => {
    try {
      setLoading(true);
      const url = search
        ? `${BASE_URL}search/movie?api_key=${tmdbApiKey}&query=${search}`
        : `${BASE_URL}discover/movie?api_key=${tmdbApiKey}`;

      const response = await axios.get(url);
      console.log(response.data);
      setMovies(response.data.results.reverse());
    } catch (error) {
      console.error("There is an error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    takeMovies();
  }, [search]);

  return (
    <MoviePage.Provider
      value={{ movies, setMovies, search, setSearch, loading }}
    >
      {children}
    </MoviePage.Provider>
  );
};

export default MovieContext;
