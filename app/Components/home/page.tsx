import React from 'react';
import Banner from './Banner/Banner';
import ApartmentType from './ApartmentType/ApartmentType';
import Property from './Property/Property';

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ApartmentType></ApartmentType>
      <Property></Property>
    </div>
  );
};

export default Homepage;