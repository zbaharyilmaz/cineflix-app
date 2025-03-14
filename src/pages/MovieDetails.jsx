import React from "react";
import { Link, useParams } from "react-router-dom";
import { tmdbApiKey } from "../auth/firebase";
import axios from "axios";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${id}?api_key=${tmdbApiKey}`)
      .then((res) => setDetails(res.data));
  }, [id]);

  return (
    <div className="min-h-screen bg-color7-light dark:bg-color5-dark">
    <div className="md:container px-10 mx-auto py-5 ">
      <div className="md:container flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
          <img
           className="w-full h-auto sm:w-1/3 :h-[450px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-around">
            <div>
              <h1 className="text-center text-color2-lightblue text-2xl m-3">
                {details.title}
              </h1>
              <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
                {details.tagline}
              </h5>
              <p className="text-gray-700 text-base mt-4">{details.overview}</p>
            </div>
            <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
              <li className="px-1 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"Release Date : " + details.release_date}
              </li>
              <li className="px-1 py-2 border-b border-gray-400 w-full">
                {"Rate : " + details.vote_average}
              </li>
              <li className="px-1 py-2 border-b border-gray-400 w-full">
                {"Total Vote : " + details.vote_count}
              </li>
              <li className="px-1 py-2 border-gray-400 w-full rounded-t-lg">
                <Link
                  to={-1}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
