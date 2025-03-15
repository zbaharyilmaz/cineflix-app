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
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-12">
          <div className="flex flex-col items-start lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-color8-grey my-6">
              {details.title}
            </h1>
            <h5 className="text-lg sm:text-xl text-gray-800 mb-4 italic text-center">
              {details.tagline}
            </h5>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {details.overview}
            </p>

            <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900 w-full">
              <li className="px-4 py-2 border-b border-gray-400">
                <strong>Release Date: </strong>
                {details.release_date}
              </li>
              <li className="px-4 py-2 border-b border-gray-400">
                <strong>Rate: </strong>
                {details.vote_average}
              </li>
              <li className="px-4 py-2 border-b border-gray-400">
                <strong>Total Votes: </strong>
                {details.vote_count}
              </li>
              <li className="px-4 py-2 rounded-b-lg">
                <Link
                  to={-1}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
