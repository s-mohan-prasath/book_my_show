import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  var [images, setImage] = useState([
    {
      adult: false,
      backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre_ids: [28, 14, 878],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 3779.941,
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 6.9,
      vote_count: 1030,
    },
    {
      adult: false,
      backdrop_path: "/Ach0puWzxuO2imh1yWEUK7CGsx.jpg",
      genre_ids: [16, 12, 28, 14],
      id: 900667,
      original_language: "ja",
      original_title: "ONE PIECE FILM RED",
      overview:
        "Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as “otherworldly.” She will appear in public for the first time at a live concert. As the venue fills with all kinds of Uta fans — excited pirates, the Navy watching closely, and the Straw Hats led by Luffy who simply came to enjoy her sonorous performance — the voice that the whole world has been waiting for is about to resound.",
      popularity: 989.356,
      poster_path: "/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
      release_date: "2022-08-06",
      title: "One Piece Film Red",
      video: false,
      vote_average: 7.4,
      vote_count: 170,
    },
    {
      adult: false,
      backdrop_path: "/92PJmMopfy64VYjd0HvIQaHGZX0.jpg",
      genre_ids: [10751, 35, 16, 28],
      id: 366672,
      original_language: "en",
      original_title: "Paws of Fury: The Legend of Hank",
      overview:
        "A hard-on-his-luck hound finds himself in a town full of cats in need of a hero to defend them from a ruthless villain's wicked plot to wipe their village off the map. With help from a reluctant mentor, our underdog must assume the role of town samurai and team up with the villagers to save the day.",
      popularity: 524.233,
      poster_path: "/wMDUDwAArpfGdtTTZ25SfwngGwt.jpg",
      release_date: "2022-07-14",
      title: "Paws of Fury: The Legend of Hank",
      video: false,
      vote_average: 6.7,
      vote_count: 179,
    },
    {
      adult: false,
      backdrop_path: "/jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
      genre_ids: [16, 35, 10749],
      id: 820067,
      original_language: "ja",
      original_title: "映画 五等分の花嫁",
      overview:
        "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?",
      popularity: 566.791,
      poster_path: "/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
      release_date: "2022-05-20",
      title: "The Quintessential Quintuplets Movie",
      video: false,
      vote_average: 9.1,
      vote_count: 94,
    },
  ]);

const SettingLG = {
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "linear"
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...SettingLG}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...SettingLG}>
          {images.map((image) => (
            <div className="w-3/6 h-56 md:h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
