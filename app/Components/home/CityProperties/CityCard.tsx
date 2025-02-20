import Image from "next/image";

type Props = {
  city: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: number;
}
}

const CityCard = ({city}: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden m-2">
      <Image 
      className="rounded-lg w-full h-[450px] object-cover"
      src={city.image} alt="City Image" width={700} height={700}></Image>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute p-4 top-4 text-white  ">
        <h1 className="text-xl font-semibold">{city.cityName}</h1>
        <p className="text-gray-200">{city.numberOfProperties}</p>
      </div>
    </div>
  );
};

export default CityCard;