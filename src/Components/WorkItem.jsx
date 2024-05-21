// WorkItem.js
import React from 'react';

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="container border border-black max-w-sm">
             <div className="rounded overflow-hidden shadow-lg  my-8 min-w-full min-h-[12rem]">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
    </div>
   
  );
};

export default WorkItem;
