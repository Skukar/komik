import { loading_gif } from '@/assets';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <img className="w-40 sm:w-64" src={loading_gif} alt="Loading..." />
    </div>
  );
};

export default Loading;
