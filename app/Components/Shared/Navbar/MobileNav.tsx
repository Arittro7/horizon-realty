import { navlink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props ={
  showNav: boolean;
  hideNav: () => void;
}

const MobileNav = ({showNav, hideNav}: Props) => {
  
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";
  
  return (
    <div>
      <div className={` ${navOpen} transform fixed bg-black opacity-70 w-full h-screen transition-all duration-500 inset-0 z-[1000]`}>
        {/* nav link */}
        <div className={` ${navOpen} text-white transform transition-all duration-500 delay-300 fixed flex flex-col justify-center w-[80%] h-full space-y-6 z-[10000] bg-[#9e0142] pl-5`}>
          {navlink.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="font-medium text-[20px] w-fit hover:text-yellow-300">
                  {link.label}
                </p>
              </Link>
            );
          })}
          {/* close Button */}
          <CgClose onClick={hideNav} size={30} className="absolute top-3 right-3 cursor-pointer"></CgClose>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
