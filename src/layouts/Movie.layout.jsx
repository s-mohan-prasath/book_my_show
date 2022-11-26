import React, { Component } from "react";
import MovieNavbar from '../components/Navbar/MovieNavbar.component'

const MovieHOCLayout = (Component) => ({ ...props }) => {
  return (
    <div>
      <MovieNavbar/>
      <Component {...props} />
      <h1>Footer</h1>
    </div>
  );
}

export default MovieHOCLayout;
