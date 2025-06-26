import React from 'react';
import { HiDocumentText, HiPuzzlePiece } from 'react-icons/hi2';
import { SiInstatus } from 'react-icons/si';
import StarRating from '@/components/common/StarRating';
import { BiBook, BiCalendar, BiUser, BiBrush } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DetailSection = ({ komikDetail }) => {
  const additionalInfo = [
    {
      label: 'Status',
      value: komikDetail.status,
      icon: <SiInstatus className="text-base" />,
    },
    {
      label: 'Tipe',
      value: komikDetail.type,
      icon: <BiBook className="text-base" />,
    },
    {
      label: 'Diterbitkan',
      value: komikDetail.released,
      icon: <BiCalendar className="text-base" />,
    },
    {
      label: 'Pengarang',
      value: komikDetail.author,
      icon: <BiUser className="text-base" />,
    },
    {
      label: 'Artist',
      value: komikDetail.artist,
      icon: <BiBrush className="text-base" />,
    },
    {
      label: 'Updated',
      value: komikDetail.updatedOn || '??',
      icon: <FaRegClock className="text-base" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-900 p-2 sm:p-4">
      <div className="md:col-span-3 flex justify-center">
        <img
          src={komikDetail.imageSrc}
          alt={komikDetail.title}
          className="w-48 sm:w-auto sm:h-96 rounded-2xl"
        />
      </div>

      <div className="md:col-span-9">
        <div className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-start flex flex-col sm:flex-row sm:items-center gap-2">
          {komikDetail.title?.replace(/Bahasa Indonesia/gi, '').trim()}
        </div>

        <div className="mt-2 flex items-center justify-center sm:justify-start text-sm text-center sm:text-start gap-2">
          <StarRating rating={Number(komikDetail.rating)} />
          <span className="text-white">{komikDetail.rating}</span>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1.5 font-semibold text-gray-300">
            <HiDocumentText className="text-base" /> <span>Sinopsis</span>
          </div>
          <p className="text-sm sm:text-base text-justify text-gray-200">
            {komikDetail.synopsis}
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {additionalInfo.map((info, index) => (
            <div key={index}>
              <div className="flex items-center gap-1.5 font-semibold text-gray-300">
                {info.icon} {info.label}
              </div>
              <h1 className="text-white text-sm sm:text-base">{info.value}</h1>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-1.5 font-semibold text-gray-300">
            <HiPuzzlePiece className="text-base" /> <span>Genre</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(komikDetail.genres) &&
            komikDetail.genres.length > 0 ? (
              komikDetail.genres.map((genre, index) => (
                <Link
                  key={index}
                  to={`/genre/${genre.genreName}`}
                  className="bg-gray-800 px-3 py-1 rounded-lg text-white text-sm hover:bg-gray-700"
                >
                  {genre.genreName}
                </Link>
              ))
            ) : (
              <span className="text-gray-400 text-sm">No genres available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
