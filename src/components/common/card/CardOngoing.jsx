import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import StarRating from '../StarRating';
import { Link } from 'react-router-dom';
import { slugify } from '@/helpers/slugify';

const CardOngoing = ({ komik }) => {
  return (
    <div className="p-0.5">
      <div className="bg-gray-800 p-1 rounded-lg">
        <Link to={`/detail/${slugify(komik.title)}`}>
          <img
            src={resizeImage(komik.imageUrl, 800, 830)}
            alt={komik.title}
            className="h-32 sm:h-48 w-full object-cover object-top rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </Link>
        <Link
          to={`/detail/${slugify(komik.title)}`}
          className="mt-2 text-sm font-semibold text-white block truncate hover:text-blue-400"
        >
          {komik.title}
        </Link>

        <Link
          to={`/chapter/${slugify(komik.title)}-${slugify(
            komik.latestChapter
          )}`}
          className="text-xs text-gray-300 truncate hover:text-blue-400"
        >
          {komik.latestChapter}
        </Link>

        <div className="mt-2 flex items-center text-xs">
          <StarRating rating={Number(komik.rating)} />
          <span className="text-white ml-2">{komik.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardOngoing;
