import { createContext } from "react";
import { tmdbApiKey } from "../auth/firebase";
import axios from "axios";
import { useState} from "react";
import {useQuery} from "@tanstack/react-query";

export const MoviePage = createContext();

const MovieContext = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const url= search
    ? `${BASE_URL}search/movie?api_key=${tmdbApiKey}&query=${search}`
    : `${BASE_URL}discover/movie?api_key=${tmdbApiKey}`;
    const {data}= await axios.get(url)
    return data.results.reverse()
  };
  const {data:movies, isLoading, isError, error} = useQuery(
    {
      queryKey: ["movies", search],
      queryFn: fetchData,
      keepPreviousData: false,
      enabled: !!search || !search, 
    }
  )
if(isLoading) return(
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
)
if(isError) return(
  <div>Error: {error.message}</div>
)

  return (
    <MoviePage.Provider
      value={{movies, isLoading, setSearch
       }}
    >
      {children}
    </MoviePage.Provider>
  );
};

export default MovieContext;
