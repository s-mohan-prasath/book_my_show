import React from "react";
import DefaultHOCLayout from "../layouts/Default.layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardSlider.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { useState } from "react";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-2 md:px-12 my-8">
        <h1 className="text-2xl font-bold ">The best of Entertainment</h1>
        <EntertainmentCardSlider />
        <div className="container mx-auto">
          <PosterSlider
            title="Recommended Movies"
            subject="List of recommended movies"
            posters={recommendedMovies}
            isDark={true}
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
              subject="Brand new releases every friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Event"
          subject="List of online streaming events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};
export default DefaultHOCLayout(HomePage);
