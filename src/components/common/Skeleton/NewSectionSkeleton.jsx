import React from 'react';
import { MdNewReleases } from 'react-icons/md';

export const NewSectionSkeleton = () => {
  return (
    <div className="p-4 bg-gray-900 mt-2">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <MdNewReleases />
        <h1>New Komik</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <CardNewSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export const CardNewSkeleton = () => {
  return (
    <div className="p-0.5 animate-pulse">
      <div className="bg-gray-800 p-1 rounded-lg flex gap-4 border-t border-gray-500">
        {/* Image Skeleton */}
        <div className="w-24 h-28 flex-shrink-0 relative">
          <div className="h-full w-full bg-gray-700 rounded-lg" />
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-col w-full justify-between overflow-hidden">
          {/* Title Skeleton */}
          <div className="h-4 bg-gray-700 rounded w-3/4 mx-1"></div>

          {/* Chapters Skeleton */}
          <div className="mt-2">
            <div className="flex items-center mb-1.5 justify-between text-xs">
              <div className="flex gap-0.5 text-gray-400 items-center">
                <div className="h-3 w-3 bg-gray-700 rounded-full" />
                <div className="h-3 bg-gray-700 rounded w-4 mx-1"></div>
              </div>
              <div className="h-3 bg-gray-700 rounded w-6 mx-1"></div>
            </div>
            <div className="flex items-center mb-1.5 justify-between text-xs">
              <div className="flex gap-0.5 text-gray-400 items-center">
                <div className="h-3 w-3 bg-gray-700 rounded-full" />
                <div className="h-3 bg-gray-700 rounded w-4 mx-1"></div>
              </div>
              <div className="h-3 bg-gray-700 rounded w-6 mx-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewSectionError = ({ error }) => (
  <div className="p-4 bg-gray-900 text-center h-96 flex flex-col mt-2 text-white rounded-lg shadow-md">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <MdNewReleases />
      <h1>New Komik</h1>
    </div>
    <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h2>
    <p className="text-gray-400 text-sm mb-4">{error}</p>
  </div>
);
