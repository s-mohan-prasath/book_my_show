import React from "react";
import DefaultHOCLayout from "../layouts/Default.layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardSlider.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

useEffect(() =>{
  const requestTopRatedMovies = async() =>{
    const getTopRatedMovies =await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=24397a139df67de4ef51171a356d7fa9"
    );
    setRecommendedMovies(getTopRatedMovies.data.results)
    console.log(recommendedMovies)
  }
  requestTopRatedMovies()
})
useEffect(() =>{
  const requestPremierMovies = async() =>{
    const getPremierMovies =await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=24397a139df67de4ef51171a356d7fa9"
    );
    setPremierMovies(getPremierMovies.data.results)
  }
  requestPremierMovies()
})
useEffect(() =>{
  const requestUpComingMovies = async() =>{
    const getUpComingMovies =await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=24397a139df67de4ef51171a356d7fa9"
    );
    setOnlineStreamEvents(getUpComingMovies.data.results)
  }
  requestUpComingMovies()
})
  // [] means empty dependency, it will run only once while loading components

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-2 md:px-12 my-8">
        <h1 className="text-2xl font-bold ">The best of Entertainment</h1>
        <br />
        <EntertainmentCardSlider />
        <div className="container mx-auto">
          <PosterSlider
            title="Recommended Movies"
            subtitle="List of recommended movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
      </div>
      <div className="bg-slate-500 w-full flex flex-col px-2 md:px-12">
        <div className="container mx-auto ">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt=""
              srcset=""
              className="w-full h-full"
            />
          </div>
          <div className="container mx-auto px-2 md:px-12 my-8">
            <PosterSlider
              title="Premiers"
              subtitle="Brand new releases every friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Event"
          subtitle="List of online streaming events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};
export default DefaultHOCLayout(HomePage);
