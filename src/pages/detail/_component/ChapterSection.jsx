import { slugify } from '@/helpers/slugify';
import React, { useState } from 'react';
import { ImCloudDownload } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ChapterSection = ({ komikDetail, nameKomik }) => {
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedChapters = komikDetail.chapters?.slice().sort((a, b) => {
    const numA = parseInt(a.chapterNum.replace(/[^0-9]/g, ''), 10);
    const numB = parseInt(b.chapterNum.replace(/[^0-9]/g, ''), 10);
    return sortOrder === 'asc' ? numA - numB : numB - numA;
  });

  const filteredChapters = sortedChapters?.filter((chapter) =>
    chapter.chapterNum.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const generateChapterSlug = (chapterNum) => {
    const baseSlug = nameKomik;
    const chapterNumber = slugify(chapterNum);
    return `${baseSlug}-${chapterNumber}`;
  };

  return (
    <div className="mt-8 bg-gray-900 p-2 sm:p-4">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div className="flex items-center gap-2">
          <FaListUl />
          <h2 className="text-xl font-bold text-white">Chapters List</h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search chapter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-700 text-white text-sm px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Sort Button */}
          <button
            onClick={toggleSortOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-bold flex items-center gap-2"
          >
            Sort : {sortOrder === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
            <span className="sr-only">
              {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            </span>
          </button>
        </div>
      </div>

      {/* Chapters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredChapters?.length > 0 ? (
          filteredChapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex flex-col justify-center">
                <Link
                  to={`/chapter/${generateChapterSlug(chapter.chapterNum)}`}
                  className="text-blue-400 hover:text-blue-500 font-semibold block"
                >
                  {chapter.chapterNum}
                </Link>
                <span className="text-gray-400 text-sm">
                  {chapter.chapterDate}
                </span>
              </div>

              <Link
                to={chapter.downloadLink}
                target="_blank"
                className="text-blue-500 text-2xl text-center"
              >
                <ImCloudDownload />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm col-span-full">
            No chapters found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ChapterSection;
