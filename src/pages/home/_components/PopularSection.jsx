import React from 'react';
import CardPopular from '@/components/common/card/CardPopular';
import {
  ErrorComponent,
  PopularSectionSkeleton,
} from '@/components/common/Skeleton/PopularSectionSkeleton';
import useFetch from '@/hooks/useFetch';
import { getKomikPopular } from '@/services/api';
import { IoMdTrophy } from 'react-icons/io';
import Slider from 'react-slick';

const PopularSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikPopular);

  if (isLoading) return <PopularSectionSkeleton />;
  if (error) return <ErrorComponent error={error} />;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-900">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <IoMdTrophy />
        <h1>Popular Komik</h1>
      </div>
      <Slider {...settings}>
        {komikData.map((komik) => (
          <CardPopular key={komik.title} komik={komik} />
        ))}
      </Slider>
    </div>
  );
};

export default PopularSection;
