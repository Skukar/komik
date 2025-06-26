import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { slugify } from '@/helpers/slugify';

const CardNew = ({ komikData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {komikData.map((komik) => (
        <div
          key={komik.title}
          className="flex items-start gap-4 border-t border-gray-500 bg-gray-800 p-3"
        >
          {/* Image */}
          <Link
            to={`/detail/${slugify(komik.title)}`}
            className="w-24 h-28 flex-shrink-0 relative"
          >
            <img
              src={resizeImage(komik.imageSrc, 800, 830)}
              alt={komik.title}
              className="h-full w-full object-fill rounded-lg transition-transform transform hover:scale-105 duration-300"
            />
          </Link>

          {/* Content */}
          <div className="flex flex-col w-full justify-between overflow-hidden">
            <Link
              to={`/detail/${slugify(komik.title)}`}
              className="text-sm font-semibold cursor-pointer text-white truncate hover:text-blue-500"
            >
              {komik.title}
            </Link>

            {/* Chapters */}
            <div className="mt-2">
              {komik.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="flex items-center mb-1.5 text-gray-200 hover:text-blue-500 justify-between text-xs"
                >
                  <Link
                    to={`/chapter/${slugify(komik.title)}-${slugify(
                      chapter.chapterTitle.replace(/ch/gi, 'chapter')
                    )}`}
                    className="flex gap-0.5 items-center w-full justify-between"
                  >
                    <div className="flex gap-0.5 items-center">
                      <TbPointFilled />
                      <span>{chapter.chapterTitle}</span>
                    </div>
                    <span>{chapter.timeAgo}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNew;
