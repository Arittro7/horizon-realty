import SearchBox from "../../Shared/SearchBox";

const Banner = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center">
      <div className="absolute bg-black inset-0 opacity-70"></div>
      {/* content */}
      <div className="flex flex-col items-center justify-center relative z-10 h-full mx-auto text-white space-y-2">
       
          <h1 
          data-aos ="fade-left"
          className=" text-xl md:text-2xl text-opacity-90 font-medium uppercase">Welcome to the <span className="text-yellow-500">Horizon</span></h1>
          <h1 
          data-aos="fade-right"
          data-aos-delay="150"
          className="uppercase font-semibold text-2xl md:text-4xl">Search Your Safe House </h1>
          <p 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm md:text-xl mb-4">Choose your dream place from more then 700,000 listings</p>
        <div 
        data-aos="zoom-in"
        ata-aos-delay="450"
        className="w-full mx-auto">
          <SearchBox></SearchBox>
        </div>
      </div>
    </div>
  );
};

export default Banner;