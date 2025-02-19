"use client"
import React, { useState } from 'react';
import Desknav from './Desknav';
import MobileNav from './MobileNav';

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleHideNav = () => setShowNav(false);
  return (
    <div>
      <Desknav showNav = {handleShowNav}></Desknav>
      <MobileNav showNav = {showNav} hideNav = {handleHideNav}></MobileNav>
    </div>
  );
};

export default Navbar;