// components/Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-300 rounded-xl w-full h-40 mb-3"></div>
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;