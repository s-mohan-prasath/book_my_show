import React, { useContext } from "react";
import { MovieContext } from "../../Context/Movie.context";

const btn_rent =(props)=>{

}
const btn_buy =(props)=>{

}


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
          <h1 className="text-3xl lg:text-white text-black sm font-bold">
            {movie.title}
          </h1>
          <p>4k ratings</p>
          <p>English, Hindi, Kannada, Tamil, Telugu</p>
          <p>
            {movie.runtime} mins | {genre}
          </p>
          <button className="bg-red-500 text-gray-200 py-2 hover:text-white rounded-lg font-semibold hover:font-bold">Rent 199</button>
          <button className="bg-red-500 text-gray-200 py-2 hover:text-white rounded-lg font-semibold hover:font-bold">Buy 499</button>
        </div>
      </div>
      <div className="w-full relative px-4 lg:px-0 ">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
          className="hidden lg:block lg:w-full  object-fill brightness-50"
          style={{ height: "30rem" }}
        />
      </div>
    </div>
  );
};

export default MovieCarousel;
