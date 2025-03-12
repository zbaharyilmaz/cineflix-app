const MovieCard = ({ poster_path, title, vote_average, overview }) => {
  return (
    <div className="movie shadow-lg rounded-lg overflow-hidden w-full" id="container">

      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className=" w-full h-80 object-fit"
      />

      <div className="flex align-baseline justify-between p-1 text-color6-lightgrey">
        <h3 className="text-xl p-2"> {title}</h3>
        <span className="p-2">
          {vote_average.toFixed(2)}
        </span>
      </div>

      <div className="movie-over">
        <h2 className="text-color2-lightblue text-lg">Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

