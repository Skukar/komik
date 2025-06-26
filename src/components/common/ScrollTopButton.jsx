import useScrollTop from '@/hooks/useScrollTop';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = () => {
  const { showScrollTop, scrollToTop } = useScrollTop();

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 p-3 text-white transition duration-300 bg-gray-600 opacity-50 cursor-pointer rounded-full shadow-lg bottom-4 right-4 sm:bottom-6 sm:right-6 hover:bg-black"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollTopButton;
