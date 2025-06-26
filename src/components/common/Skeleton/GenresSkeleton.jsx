import React from 'react';
import { TiThList } from 'react-icons/ti';

export const GenresSkeleton = () => (
  <div className="bg-gray-900 p-4 mt-2 animate-pulse">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <TiThList />
      <h1>Genres</h1>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-700 text-sm font-semibold text-white py-1 px-0.5 text-center rounded-lg"
        >
          <div className="w-16 h-4 bg-gray-600 rounded mx-auto"></div>
        </div>
      ))}
    </div>
  </div>
);

export const GenresError = ({ error }) => (
  <div className="p-4 bg-gray-900 text-center h-56 flex flex-col  text-white rounded-lg shadow-md">
    <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
      <TiThList />
      <h1>Genres</h1>
    </div>
    <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h2>
    <p className="text-gray-400 text-sm mb-4">{error}</p>
  </div>
);
