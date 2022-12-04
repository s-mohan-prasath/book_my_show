import React, { useContext } from "react";
import { MovieContext } from "../../Context/Movie.context";

const MovieCarousel = () => {
  const { movie } = useContext(MovieContext);
  const genre = movie.genres?.map(({ name }) => name).join(", ");
  return (
    <div className="w-full relative px-4 lg:px-0 ">
      <div className="w-full lg:max-w-md flex flex-col lg:flex-row relative lg:absolute lg:left-20 lg:top-10 lg:gap-4 gap-2 z-10">
        <div className="w-full lg:w-1/2">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-3 text-black text-sm lg:text-white">
          <h1 className="text-3xl lg:text-white text-black sm font-bold">{movie.title}</h1>
          <p>4k ratings</p>
          <p>English, Hindi, Kannada, Tamil, Telugu</p>
          <p>{movie.runtime} mins | {genre}</p>
        </div>
      </div>
      <div className="w-full relative px-4 lg:px-0 "><img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="lg:w-full lg:block sm:hidden object-fill brightness-50" style={{height:"30rem"}}/></div>
    </div>
  );
};

export default MovieCarousel;
