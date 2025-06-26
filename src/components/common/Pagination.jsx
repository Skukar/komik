import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ genreId, pagination, currentPage }) => {
  const navigate = useNavigate();

  if (!pagination || pagination.length === 0) return null;

  const currentPageNumber = parseInt(currentPage);
  const totalPages = pagination.length;

  const handlePrev = () => {
    if (currentPageNumber > 1) {
      navigate(`/genre/${genreId}/page/${currentPageNumber - 1}`);
    }
  };

  const handleNext = () => {
    if (currentPageNumber < totalPages) {
      navigate(`/genre/${genreId}/page/${currentPageNumber + 1}`);
    }
  };

  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="flex items-center space-x-2 bg-gray-900 p-3 rounded-lg shadow-lg max-w-full overflow-x-auto">
        <button
          onClick={handlePrev}
          disabled={currentPageNumber === 1}
          className={`p-3 rounded-lg transition-all duration-200 flex items-center justify-center text-lg ${
            currentPageNumber === 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
          }`}
        >
          <FaChevronLeft size={24} />
        </button>
        {pagination.map((page) => (
          <button
            key={page.pageNumber}
            onClick={() =>
              navigate(`/genre/${genreId}/page/${page.pageNumber}`)
            }
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-lg ${
              currentPageNumber === parseInt(page.pageNumber)
                ? 'bg-yellow-500 text-gray-900 shadow-lg scale-105'
                : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
            }`}
          >
            {page.pageNumber}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPageNumber === totalPages}
          className={`p-3 rounded-lg transition-all duration-200 flex items-center justify-center text-lg ${
            currentPageNumber === totalPages
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
          }`}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
