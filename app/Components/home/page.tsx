"use client"
import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ApartmentType from './ApartmentType/ApartmentType';
import Property from './Property/Property';
import CityProperties from './CityProperties/CityProperties';
import PropertyFeatures from './PropertyFeatures/PropertyFeatures';
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

  useEffect(() => {
    const initAOS = async()=>{
      await import ('aos')
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      })
    }

    initAOS()
  },[])

  return (
    <div>
      <Banner></Banner>
      <ApartmentType></ApartmentType>
      <Property></Property>
      <CityProperties></CityProperties>
      <PropertyFeatures></PropertyFeatures>
      <Reviews></Reviews>
      <Blog></Blog>
    </div>
  );
};

export default Homepage;