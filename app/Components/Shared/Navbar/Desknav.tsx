import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

const Desknav = () => {
  const navlink = [
    {
      id: 1,
      label: "Home",
      url: "#",
    },
    {
      id: 2,
      label: "Top Deals",
      url: "#",
    },
    {
      id: 3,
      label: "Listing",
      url: "#",
    },
    {
      id: 4,
      label: "Contact",
      url: "#",
    },
    {
      id: 5,
      label: "About",
      url: "#",
    },
  ];

  return (
    <div className="fixed h-[10vh] z-[100] transition-all duration-200 w-full bg-rose-900">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto">
        <div className="flex items-center">
          <Image className="w-16 " src={logo} alt="logo" />
          <p className="font-bold text-white text-xl">Horizon Realty</p>
        </div>
       {/* Navigation Links */}
        <div className="text-white lg:flex hidden items-center space-x-14">
        {
          navlink.map((link)=>{ 
            return <Link key={link.id} href={link.url}>
              <p className="font-medium hover:text-yellow-300">{link.label}</p>
              </Link>})
        }
        </div>
        {/* Login or Signin */}
        <div className="flex items-center space-x-2">
        <button className="btn bg-white rounded-md px-3 py-1">Login</button>
        <HiMenuAlt3 size={28} className="text-white lg:hidden cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Desknav;
