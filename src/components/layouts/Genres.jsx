import useFetch from '@/hooks/useFetch';
import { getGenre } from '@/services/api';
import React from 'react';
import { TiThList } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { GenresError, GenresSkeleton } from '../common/Skeleton/GenresSkeleton';

const Genres = () => {
  const { data: genreData, isLoading, error } = useFetch(getGenre);

  if (isLoading) return <GenresSkeleton />;
  if (error) return <GenresError error={error} />;

  const genres = genreData?.genres || [];

  if (!genres.length) {
    return <div>No genres available</div>;
  }

  return (
    <div className="bg-gray-900 p-4 mt-2">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <TiThList />
        <h1>Genres</h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {genres.map((genre) => (
          <Link
            key={genre.value}
            to={`/genre/${genre.value}`}
            className="bg-gray-700 text-sm font-semibold cursor-pointer text-white py-1 px-0.5 text-center rounded-lg hover:bg-gray-600 transition"
          >
            {genre.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Genres;
