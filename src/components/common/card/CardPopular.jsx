import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import StarRating from '../StarRating';
import { Link } from 'react-router-dom';
import { slugify } from '@/helpers/slugify';

const CardPopular = ({ komik }) => {
  return (
    <div className="p-0.5">
      <div className="bg-gray-800 p-1 rounded-lg">
        <Link to={`/detail/${slugify(komik.title)}`}>
          <img
            src={resizeImage(komik.imageSrc, 800, 830)}
            alt={komik.title}
            className="h-32 sm:h-48 w-full object-cover object-top rounded-md transition-transform transform hover:scale-105 duration-300"
          />
        </Link>

        <Link
          className="mt-2 text-sm font-semibold text-white px-1 block truncate hover:text-blue-400"
          to={`/detail/${slugify(komik.title)}`}
          title={komik.title}
        >
          {komik.title}
        </Link>

        <Link
          to={`/chapter/${slugify(komik.title)}-${slugify(komik.chapter)}`}
          className="text-xs text-gray-300 px-1 truncate hover:text-blue-400"
        >
          {komik.chapter}
        </Link>

        <div className="mt-2 flex items-center text-xs px-1">
          <StarRating rating={Number(komik.rating)} />
          <span className="text-white ml-2">{komik.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPopular;
