import { useContext } from "react";
import { AuthPage } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, title, vote_average, overview, id }) => {
  const { currentUser } = useContext(AuthPage);
  const navigate = useNavigate();

  const handleClick = () => {
    if (currentUser) {
      navigate("/details/" + id);
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="movie shadow-lg rounded-lg p-2 overflow-hidden max-w-[300px] w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-transform duration-300 transform hover:scale-10 cursor-alias"
      id="container"
      onClick={handleClick}
    >
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="flex flex-wrap md:flex-nowrap items-baseline justify-between p-2 text-color6-lightgrey md:text-[18px] sm: text-sm ">
        <h3 >{title}</h3>
        {currentUser && (
          <span
            className={`tag ${vote_average > 7 ? "bg-green-500" : "bg-red-500"} text-white p-1 bottom-0 right-0 absolute`}
          >
            {vote_average.toFixed(2)}
          </span>
        )}
      </div>
      <div className="movie-over custom-scrollbar p-2">
        <h2 className="text-color2-lightblue text-lg">Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
