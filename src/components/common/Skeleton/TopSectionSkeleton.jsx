import React from 'react';
import { IoMdMedal } from 'react-icons/io';

export const TopSectionSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-1.5 text-white p-3 bg-gray-800 animate-pulse">
        <IoMdMedal />
        <h1 className="text-sm">Top Komik</h1>
      </div>

      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <CardTopSkeleton key={index} />
        ))}
      </>
    </>
  );
};

export const CardTopSkeleton = () => (
  <div className="flex items-start gap-4 border-t border-gray-500 bg-gray-800 p-3 animate-pulse">
    {/* Image Skeleton */}
    <div className="w-24 h-28 flex-shrink-0 relative">
      <div className="w-full h-full bg-gray-700 rounded-lg" />
      <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full w-10 h-5" />
    </div>

    {/* Content Skeleton */}
    <div className="flex flex-col justify-between overflow-hidden w-full">
      <div className="w-32 h-5 bg-gray-700 rounded mb-2" />
      <div className="flex flex-wrap gap-1 mt-2 overflow-hidden">
        <div className="w-16 h-3 bg-gray-700 rounded"></div>
        <div className="w-16 h-3 bg-gray-700 rounded"></div>
      </div>
      <div className="mt-2 flex items-center text-xs">
        <div className="w-16 h-3 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
);

export const TopSectionError = ({ error }) => (
  <div className="p-4 bg-gray-900 text-center h-56 flex flex-col text-white rounded-lg shadow-md">
    <div className="flex items-center gap-2 text-white text-lg font-semibold mb-4">
      <IoMdMedal />
      <h1>Top Komik</h1>
    </div>
    <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h2>
    <p className="text-gray-400 text-sm mb-4">{error}</p>
  </div>
);
