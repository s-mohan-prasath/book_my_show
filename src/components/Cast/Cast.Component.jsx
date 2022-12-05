import React from "react";

const Cast = (props) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="w-32 h-32">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.src}`}
              alt="cast and crew"
              className="w-full h-full rounded-full"
            />
        </div>
        <h2 className="text-sm text-gray-700 font-bold self-center">{props.name}</h2>
        <p className="text-xs text-black self-center">as {props.role}</p>
      </div>
    </>
  );
};

export default Cast;
