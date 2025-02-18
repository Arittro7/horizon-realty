"use client";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  // static navbar on scroll
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setScrollNav(true);
      if (window.scrollY < 90) setScrollNav(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <div className={`fixed ${scrollNav ? 'bg-gray-600': ""} h-[10vh] z-[100] transition-all duration-200 w-full bg-rose-900`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto">
        <div className="flex items-center">
          <Image className="w-6 mr-3 " src={logo} alt="logo" />
          <p className="font-bold text-white text-xl">Horizon Realty</p>
        </div>
        {/* Navigation Links */}
        <div className="text-white lg:flex hidden items-center space-x-14">
          {navlink.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="font-medium hover:text-yellow-300">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Login or Signin */}
        <div className="flex items-center space-x-2">
          <button className="btn bg-white rounded-md px-3 py-1">Login</button>
          <HiMenuAlt3
            size={28}
            className="text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Desknav;
