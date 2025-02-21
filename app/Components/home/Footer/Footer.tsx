import logo from '@/public/logo.png'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-14 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* first section */}
        <div>
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto">
        <div className="flex items-center">
          <Image className="w-6 mr-3" src={logo} alt="logo" />
          <p className="font-bold text-white text-xl">Horizon Realty</p>
        </div>
        </div>
        <h1 className='text-white my-2'><span className='text-lg font-bold text-[#f7b13f]'>Horizon Realty</span> Helping you find your perfect home.</h1>
        <p className='text-white text-justify'> 
        Explore our listings, get expert advice, and let us guide you every step of the way. Your dream property is just a click away.
        </p>
        <p className='text-gray-200 mt-2 font-semibold'>nahidarman015@gmail.com</p>
        <p className='text-gray-200 mt-2 font-semibold'>+880 1773 99 33 97</p>
        <div className='flex items-center space-x-3 mt-2'>
          <FaFacebook className='text-blue-700 ' size={32}/>
          <FaTwitter className='text-blue-500' size={32}/>
          <FaGithub className='text-white ' size={32}/>
        </div>
      </div>
      {/* second section */}
      <div className='md:mx-auto'>
        <h1 className='footer_heading'>Popular Search</h1>
        <p className='footer_link'>Apartment for Rent</p>
        <p className='footer_link'>Apartment for Buy</p>
        <p className='footer_link'>Offices for Rent</p>
        <p className='footer_link'>Offices for Buy</p>
      </div>
      {/* third section */}
      <div className='lg:mx-auto'>
        <h1 className='footer_heading'>Quick Link</h1>
        <p className='footer_link'>Terms of use</p>
        <p className='footer_link'>Privacy Policy</p>
        <p className='footer_link'>Pricing Plans</p>
        <p className='footer_link'>Contact Support</p>
        <p className='footer_link'>Careers at Horizon</p>
        <p className='footer_link'>FAQ</p>
      </div>
      {/* last section */}
      <div className='lg:mx-auto'>
        <h1 className='footer_heading'>Discover</h1>
        <p className='footer_link'>Sydney</p>
        <p className='footer_link'>Perth</p>
        <p className='footer_link'>Melbourne</p>
        <p className='footer_link'>Brisbane</p>
        <p className='footer_link'>Canberra</p>
      </div>
    </div>
    <p className='text-center mt-4 text-base text-white opacity-40'>©copyright 2025 by Horizon Realty</p>
  </div>
  );
};

export default Footer;