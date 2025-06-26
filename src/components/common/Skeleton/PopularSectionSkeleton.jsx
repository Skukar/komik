import React from 'react';
import { IoMdTrophy } from 'react-icons/io';
import Slider from 'react-slick';

export const PopularSectionSkeleton = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    ],
  };

  return (
    <div className="p-4 bg-gray-900">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <IoMdTrophy />
        <h1>Popular Komik</h1>
      </div>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CardPopularSkeleton key={index} />
        ))}
      </Slider>
    </div>
  );
};

export const CardPopularSkeleton = () => {
  return (
    <div className="p-0.5 animate-pulse">
      <div className="bg-gray-800 p-1 rounded-lg">
        <div className="h-32 sm:h-48 w-full bg-gray-700 rounded-lg" />
        <div className="mt-2 h-4 bg-gray-700 rounded w-3/4 mx-1"></div>
        <div className="mt-1 h-3 bg-gray-700 rounded w-1/2 mx-1"></div>
        <div className="mt-2 flex items-center text-xs px-1">
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
          <div className="h-4 w-10 bg-gray-700 rounded ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export const ErrorComponent = ({ error }) => (
  <div className="p-4 bg-gray-900 text-center h-40 sm:h-56 flex flex-col text-white">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <IoMdTrophy />
      <h1>Popular Komik</h1>
    </div>
    <h1 className="text-xl font-semibold">Oops! Something went wrong.</h1>
    <p className="text-gray-400 mt-2">{error}</p>
  </div>
);
