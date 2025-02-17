import React from 'react';
import Desknav from './Desknav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <div>
      <Desknav></Desknav>
      <MobileNav></MobileNav>
    </div>
  );
};

export default Navbar;