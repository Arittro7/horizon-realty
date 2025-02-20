import React from 'react';
import Banner from './Banner/Banner';
import ApartmentType from './ApartmentType/ApartmentType';
import Property from './Property/Property';
import CityProperties from './CityProperties/CityProperties';
import PropertyFeatures from './PropertyFeatures/PropertyFeatures';
import Reviews from './Reviews/Reviews';

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ApartmentType></ApartmentType>
      <Property></Property>
      <CityProperties></CityProperties>
      <PropertyFeatures></PropertyFeatures>
      <Reviews></Reviews>
    </div>
  );
};

export default Homepage;