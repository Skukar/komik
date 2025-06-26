import { resizeImage } from '@/helpers/resizeImage';
import { slugify } from '@/helpers/slugify';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating';

const CardSearch = ({ results }) => {
  if (!results || results.length === 0) {
    return <div className="text-white">No results found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {results.map((item) => (
        <div className="p-0.5">
          <div className="bg-gray-800 p-1 rounded-lg">
            <Link to={`/detail/${slugify(item.title)}`}>
              <img
                src={resizeImage(item.image, 800, 830)}
                alt={item.title}
                className="h-32 sm:h-48 w-full object-cover object-top rounded-lg transition-transform transform hover:scale-105 duration-300"
              />
            </Link>
            <Link
              to={`/detail/${slugify(item.title)}`}
              className="mt-2 text-sm font-semibold text-white block truncate hover:text-blue-400"
            >
              {item.title}
            </Link>

            <Link
              to={`/chapter/${slugify(item.title)}-${slugify(
                item.latestChapter
              )}`}
              className="text-xs text-gray-300 truncate hover:text-blue-400"
            >
              {item.latestChapter}
            </Link>

            <div className="mt-2 flex items-center text-xs">
              <StarRating rating={Number(item.rating)} />
              <span className="text-white ml-2">{item.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSearch;
