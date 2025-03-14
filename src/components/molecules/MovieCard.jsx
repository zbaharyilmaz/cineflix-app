import { useContext } from "react";
import { AuthPage } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, title, vote_average, overview,id }) => {
  const { currentUser } = useContext(AuthPage);
  const navigate=useNavigate()
  const handleClick=()=>{
    if(currentUser){
      navigate("/details/"+id)
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div
      className="movie shadow-lg rounded-lg overflow-hidden w-full"
      id="container"
      onClick={handleClick}
    >
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className=" w-full h-80 object-cover"
      />

      <div className="flex flex-wrap md:flex-nowrap align-baseline justify-between p-2 text-color6-lightgrey md:text-xl sm:text-lg">
        <h3> {title}</h3>
        {currentUser && (
          <span className={`tag ${vote_average > 7 ? "green" : "red"}`}>
            {vote_average.toFixed(2)}
          </span>
        )}
      </div>

      <div className="movie-over custom-scrollbar">
        <h2 className="text-color2-lightblue text-lg">Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
