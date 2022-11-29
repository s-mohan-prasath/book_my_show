import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="h-80 flex flex-col gap-2 ml-5 md:ml-3 sm:ml-2">
        <img
          className="h-full rounded-lg"
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt=""
          srcset=""
        />
      </div>
        <h3 className={`ml-5 md:ml-3 sm:ml-2 text-l font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
          {props.title}
        </h3>
    </Link>
  );
};

export default Poster;
