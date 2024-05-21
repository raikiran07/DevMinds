// Showcase.js
import React from 'react';
import WorkItem from './WorkItem';

const Showcase = () => {
  const works = [
    {
      id: 1,
      image: 'url-to-your-image-1',
      title: 'Project 1',
      description: 'Description of Project 1.',
    },
    {
      id: 2,
      image: 'url-to-your-image-2',
      title: 'Project 2',
      description: 'Description of Project 2.',
    },
    {
        id: 3,
        image: 'url-to-your-image-2',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
      {
        id: 4,
        image: 'url-to-your-image-2',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
      {
        id: 5,
        image: 'url-to-your-image-2',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
 
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 p-[4rem] border">Our Work</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 lg:max-w-[70%] mx-auto">
        {works.map((work) => (
          <WorkItem key={work.id} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
