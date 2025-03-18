import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate=useNavigate()
  return (
      <div className="notfound">
      <div className="tv-container">
        <div className="static "></div>
        <div className="overlay">
          <div className="error-text">404</div>
          <div className="subtext">Channel Not Found</div>
          <div className="instructions">
            Oops! Try adjusting your antenna or <button className="btn text-red-800 outline-dotted hover:text-white hover:bg-red-800 hover:outline-none transition-all duration-300" onClick={()=>navigate(-1)}>Go back</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default NotFound;
