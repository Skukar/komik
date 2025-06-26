import { resizeImage } from '@/helpers/resizeImage';
import { slugify } from '@/helpers/slugify';
import React from 'react';
import StarRating from '../StarRating';
import { Link } from 'react-router-dom';

const CardGenre = ({ series }) => {
  return (
    <div className="p-0.5">
      <div className="bg-gray-800 p-1 rounded-lg">
        <Link to={`/detail/${slugify(series.title)}`}>
          <img
            src={resizeImage(series.image, 800, 830)}
            alt={series.title}
            className="h-32 sm:h-48 w-full object-cover object-top rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </Link>
        <Link
          to={`/detail/${slugify(series.title)}`}
          className="mt-2 text-sm font-semibold text-white block truncate hover:text-blue-400"
        >
          {series.title}
        </Link>

        <Link
          to={`/chapter/${slugify(series.title)}-${slugify(
            series.latestChapter
          )}`}
          className="text-xs text-gray-300 truncate hover:text-blue-400"
        >
          {series.latestChapter}
        </Link>

        <div className="mt-2 flex items-center text-xs">
          <StarRating rating={Number(series.rating)} />
          <span className="text-white ml-2">{series.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardGenre;
