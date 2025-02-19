import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="bg-white w-full mx-auto h-[3rem] sm:h-[4rem] px-4 sm:px-8 flex flex-col rounded-md md:w-[80%] mt-10">
      <div className="flex items-center justify-between h-full">
        <input 
        className="sm:flex-[0.8] h-[60%] bg-gray-300 block rounded-lg outline-none px-4 text-black placeholder:text-gray-600"
        type="text" placeholder="Enter an Address..." />
        <div className="lg:flex hidden items-center flex-[0.2] ml-2 md:ml-8 space-x-2">
          <HiAdjustmentsHorizontal 
          size={24} className="text-gray-700"></HiAdjustmentsHorizontal>
          <p className="text-gray-700 font-semibold">Advanced</p>
        </div>
        <div className="md:w-10 w-6 h-6 md:h-10 ml-2 bg-rose-600 flex items-center hover:bg-red-900 transition-all duration-150 cursor-pointer justify-center rounded-full text-white">
          <FaSearch/>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;