import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const normalizedRating = Math.min(5, Math.max(0, rating / 2));
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400" />
      ))}

      {/* Half star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-gray-500" />
      ))}
    </div>
  );
};

export default StarRating;
