// Showcase.js
import React from 'react';
import WorkItem from './WorkItem';

const Showcase = () => {
  const works = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Project 1',
      description: 'Description of Project 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia?',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet..',
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
      {
        id: 4,
        image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
      {
        id: 5,
        image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Project 2',
        description: 'Description of Project 2.',
      },
 
  ];

  return (
    <div className="container mx-auto m-8">
      <h1 className="text-3xl font-bold px-[4rem] py-3">Our Work</h1>
      <hr className='max-w-[30px]  mx-auto mb-10'></hr>
      <div className="max-w-[95%] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto">
        {works.map((work) => (
          <WorkItem key={work.id} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
