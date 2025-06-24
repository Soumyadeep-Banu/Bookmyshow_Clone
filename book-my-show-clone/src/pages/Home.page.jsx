import React, { useState } from "react";

//Layout

import DefaultLayoutHOC from "../layout/Default.layout";

//Components

import EntertainmentCard from "../Component/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Component/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Component/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const { RecommendedMovies, setRecommendedMovies } = useState([]);
  const { PremiumMovies, setPremiumMovies } = useState([]);
  const { onlineStreamingMovies, setonlineStreamingMovies } = useState([]);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertaiment
        </h1>
        <EntertainmentCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={RecommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              // src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Every new relase on Friday"
            posters={PremiumMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="OnlineStreaming"
          subject="Online Streaming Events"
          posters={onlineStreamingMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHOC(HomePage);
