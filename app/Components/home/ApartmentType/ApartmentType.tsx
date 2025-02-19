import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import { ApartmentTypeData } from '@/data/data';
import ApartmentCard from './ApartmentCard';

const ApartmentType = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto'>
        <SectionHeading 
        heading='Apartment Types'
        subHeading='Choose Your Nest Type'
        ></SectionHeading>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 items-center'>
        {ApartmentTypeData.map((type)=>{
          return(<div key={type.id}>
            <ApartmentCard type={type}></ApartmentCard>
            </div>
            )
        })}
      </div>
    </div>
  );
};

export default ApartmentType;