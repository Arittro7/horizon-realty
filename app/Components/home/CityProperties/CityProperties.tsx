import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import CitySlider from './CitySlider';

const CityProperties = () => {
  return (
    <div className='py-10'>
      <div className='w-[80%] mx-auto'>
      <SectionHeading
      heading='Explore Properties in Top Cities'
      subHeading='Find the best properties in your city'
      ></SectionHeading>
      <div className='mt-10 md:mt-16'> 
        <CitySlider></CitySlider>
      </div>
      </div>
    </div>
  );
};

export default CityProperties;