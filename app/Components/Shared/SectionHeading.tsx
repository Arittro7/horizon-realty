import React from 'react';

type Props ={
  heading: string;
  subHeading?: string;
}

const SectionHeading = ({heading, subHeading}: Props) => {
  return (
    <div className='text-center'>
      <h1 className='md:text-3xl text-xl font-bold mb-2 text-gray-800'>{heading}</h1>
      <p className='md:text-2xl text-sm mb-2 text-gray-800'>{subHeading}</p>
    </div>
  );
};

export default SectionHeading;