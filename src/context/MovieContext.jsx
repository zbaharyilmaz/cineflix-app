import { createContext } from "react";
import { tmdbApiKey } from "../auth/firebase";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const MoviePage = createContext();

const MovieContext = ({ children }) => {

    
  const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [movies, setMovies] = useState([])
  useEffect(()=> {
  const takeMovies = async() => {

    try {
        const response = await axios.get(`${BASE_URL}movie?api_key=${tmdbApiKey}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error("There is am error:", error);
      }
    }
    takeMovies();
  }, []);



  return <MoviePage.Provider value={{movies}}>{children}</MoviePage.Provider>;
};

export default MovieContext;
