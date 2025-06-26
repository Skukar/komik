import CardGenre from '@/components/common/card/CardGenre';
import Loading from '@/components/common/Loading';
import Pagination from '@/components/common/Pagination';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { getGenreDetail } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { TiThList } from 'react-icons/ti';
import { useParams } from 'react-router-dom';

const GenreDetail = () => {
  const { genreId, pageNumber = 1 } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGenreDetail = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getGenreDetail(genreId, pageNumber);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenreDetail();
  }, [genreId, pageNumber]);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center flex items-start bg-gray-950 text-white text-xl justify-center min-h-screen">
        Error: {error}
      </div>
    );
  if (!data || !data.seriesList)
    return (
      <div className="text-center flex items-start bg-gray-950 text-white text-xl justify-center min-h-screen">
        No series found
      </div>
    );

  const { seriesList, pagination } = data;

  return (
    <div className="bg-gray-900 p-4">
      <div className="text-white text-xl flex items-center gap-2 font-semibold mb-4">
        <TiThList />
        Genre: {genreId}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-1">
        {seriesList.length > 0 ? (
          seriesList.map((series) => (
            <CardGenre key={series.title} series={series} />
          ))
        ) : (
          <div>No series available in this genre.</div>
        )}
      </div>
      <Pagination
        genreId={genreId}
        pagination={pagination}
        currentPage={pageNumber}
      />

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default GenreDetail;
