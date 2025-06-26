import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardSearch from '@/components/common/card/CardSearch';
import Loading from '@/components/common/Loading';
import { getSearchResults } from '@/services/api';
import ScrollTopButton from '@/components/common/ScrollTopButton';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      getSearchResults(query)
        .then((data) => {
          setResults(data.seriesList);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-white text-2xl mb-4">Search Results for: {query}</h1>
      {loading ? <Loading /> : <CardSearch results={results} />}

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default SearchPage;
