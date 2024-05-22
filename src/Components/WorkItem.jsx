// WorkItem.js
import React from 'react';

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="min-w-[300px] mb-4 lg:mb-0 relative">
             <div className="rounded min-w-full overflow-hidden">
      <img className="w-full h-[100%]" src={image} alt={title} />
      <div className="absolute bottom-0 display-none bg-very-light-purple min-w-full min-h-[50%] opacity-80 p-2">
        <div className="font-bold mb-2">{title}</div>
        <p className="text-gray-700 text-sm text-center">{description}</p>
        <div className='py-2 flex items-center justify-center gap-4 text-xs'>
        <button className='border bg-gray-dark text-white p-1 rounded-md'>Check code</button>
        <button className='border bg-gray-dark text-white p-1 rounded-md'>Go Live</button>
        </div>
        
      </div>
    </div>
    </div>
   
  );
};

export default WorkItem;
