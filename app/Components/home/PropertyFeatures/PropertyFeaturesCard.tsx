"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const PropertyFeaturesCard = ({ building }: Props) => {
  return (
    <Tilt className="rounded-lg shadow-md p-4 bg-white">
      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 flex-col bg-gray-100 ">
        <Image
          src={building.image}
          alt={building.title}
          width={40}
          height={40}
        ></Image>
      </div>
      <div className="p-2">
        <p className="mt-6 text-red-600 font-bold text-xl">0{building.id}</p>
        <p className="text-lg text-gray-700 font-bold my-2">{building.title}</p>
        <p className="text-sm opacity-70 text-gray-700 ">{building.description}</p>
      </div>
    </Tilt>
  );
};

export default PropertyFeaturesCard;
