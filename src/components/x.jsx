//MovieContext

import React , {useState} from 'react'
import { createContext } from 'react';

export const MovieContext = createContext()

const MovieProvider = ({children}) => {

  const [movie,setMovie] = useState({
   id:0,
   original_title:"",
   overview:"",
   poster_path:"",
   backdrop_path:"", 
  });
  

  return (
    <MovieContext.Provider value={{movie,setMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider


// MoviePage

import React, { useState, useEffect, useContext } from "react";
import MovieHOCLayout from "../layouts/Movie.layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import {FaCcVisa,FaCcApplePay} from 'react-icons/fa'


import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import MovieContext from '../Context/Movie.context'


const MoviePage = () => {
  const { id } = useParams();
  const {movie} = useContext(MovieContext)

  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState();

useEffect(() => {
    const requestCastMoives = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCastMoives();
  }, [id]);
useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);
useEffect(() => {
    const requestRecommendedMoives = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMoives();
  }, [id]);
const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          },
      },
  ],
};
  return (
    <>
    Chellam
      {/* <MovieHero/> */}
      <div className="container lg:w-3/4 px-3 sm:px-2 my-4 sm:my-2">
          <h2 className="text-2xl font-bold text-black my-4">About the movie</h2>
          <p className="text-sm text-gray-700">
            {cast.overview}
          </p>
          <h2 className="text-2xl font-bold text-black my-5">Applicable Offers</h2>
        <div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex flex-row gap-2 bg-yellow-300 border-dashed border-gray-500 border-4 px-3 py-3">
              <div className="w-8 h-8"><FaCcVisa className="w-full h-full"/></div>
              <div className="text-l font-bold text-black">
                <h3>Visa Stream Offer</h3>
                <p className="text-sm font-normal text-gray-700">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 bg-yellow-300 border-dashed border-gray-500 border-4 px-3 py-3">
            <div className="w-8 h-8"><FaCcApplePay className="w-full h-full"/></div>
              <div className="text-l font-bold text-black">
                <h3>Visa Stream Offer</h3>
                <p className="text-sm font-normal text-gray-700">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>
        <PosterSlider
          config={settings}
          title="Recommended Videos"
          posters={recommendedMovies}
          isDark={false}
        />
        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE"
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieHOCLayout(MoviePage);
//