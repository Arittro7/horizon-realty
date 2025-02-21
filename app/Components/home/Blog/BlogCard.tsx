import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

type Props = {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-full"
        ></Image>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaCalendar className="text-rose-600" />
              <p>{blog.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMessage className="text-rose-600" />
              <p>{blog.comment}</p>
            </div>
          </div>
         <div>
         <h1 className="mt-6 font-bold cursor-pointer mb-2 text-lg text-gray-700">
            {blog.title}
          </h1>
          <p className="text-gray-600 text-base">{blog.shortDescription}</p>
         </div>
         <div className="flex items-center mt-6 gap-2">
         <button className=" hover:text-rose-800 font-semibold text-lg">Read More</button>
         <BsArrowRight className="text-rose-800"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
