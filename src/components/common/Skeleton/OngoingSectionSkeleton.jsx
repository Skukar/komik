import React from 'react';
import { MdCallMissedOutgoing } from 'react-icons/md';

export const OngoingSectionSkeleton = () => (
  <div className="p-4 bg-gray-900 animate-pulse">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <MdCallMissedOutgoing />
      <h1>On-Going Komik</h1>
    </div>
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="p-0.5">
          <div className="bg-gray-800 p-1 rounded-lg">
            <div className="h-32 sm:h-48 w-full bg-gray-700 rounded-lg"></div>
            <div className="mt-2 h-4 bg-gray-600 rounded"></div>
            <div className="mt-1 h-3 bg-gray-700 rounded w-3/4"></div>
            <div className="mt-2 flex items-center">
              <div className="h-4 w-4 bg-gray-600 rounded-full"></div>
              <div className="ml-2 h-4 bg-gray-600 rounded w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const OngoingSectionError = ({ error }) => (
  <div className="p-4 bg-gray-900 text-center h-40 flex flex-col text-white rounded-lg shadow-md">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <MdCallMissedOutgoing />
      <h1>On-Going Komik</h1>
    </div>
    <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h2>
    <p className="text-gray-400 text-sm mb-4">{error}</p>
  </div>
);
