import Image from "next/image";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type Props = {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-12 h-12 text-rose-700 absolute top-4 right-4 md:right-44 opacity-30" />
      <div className="mt-10 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
      </div>
      <p className="mt-6 text-base text-gray-600 font-medium">
        {review.review}
      </p>
      <div className="w-full h-[1.8px] bg-gray-800 opacity-10 mt-6"></div>
      <div className="flex items-center space-x-4 mt-4">
        <Image
          src={review.userImage}
          alt={review.name}
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div>
        <h1 className="text-lg font-bold text-gray-800">{review.name}</h1>
        <p className="text-base text-gray-600">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
