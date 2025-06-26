import Loading from '@/components/common/Loading';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import useFetch from '@/hooks/useFetch';
import { getDetailChapter } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChaptersPage = () => {
  const { chapterSlug } = useParams();
  const [currentChapterSlug, setCurrentChapterSlug] = useState(chapterSlug);
  const [prefix, chapterNumber] = chapterSlug.split('-chapter-');
  const chapterNum = parseInt(chapterNumber, 10);

  const prevChapterSlug = `${prefix}-chapter-${chapterNum - 1}`;
  const nextChapterSlug = `${prefix}-chapter-${chapterNum + 1}`;

  const {
    data: chapterDetails,
    isLoading,
    error,
    refetch,
  } = useFetch(() => getDetailChapter(chapterSlug || ''));

  useEffect(() => {
    if (chapterSlug !== currentChapterSlug) {
      setCurrentChapterSlug(chapterSlug);
      refetch();
    }
  }, [chapterSlug, currentChapterSlug, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center flex bg-gray-900 items-start justify-center min-h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  if (!chapterDetails) {
    return (
      <div className="text-center flex bg-gray-900 items-start text-white text-xl justify-center min-h-screen">
        No chapter details found.
      </div>
    );
  }

  const { title, images = [], prevChapter, nextChapter } = chapterDetails;

  // Navigate Chapter
  const renderChapterNavigation = () => (
    <div className="flex justify-between w-full max-w-screen-lg my-6">
      {prevChapter && (
        <Link
          to={`/chapter/${prevChapterSlug}`}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all"
        >
          Previous Chapter
        </Link>
      )}
      {nextChapter && (
        <Link
          to={`/chapter/${nextChapterSlug}`}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all ml-auto"
        >
          Next Chapter
        </Link>
      )}
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mt-6">{title}</h1>

      {renderChapterNavigation()}

      <div className="w-full max-w-screen-lg mx-auto">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Chapter ${chapterSlug} - Image ${index + 1}`}
              className="w-full h-auto shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {renderChapterNavigation()}

      {/* Scroll Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default ChaptersPage;
