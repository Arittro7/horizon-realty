import { blogs } from "@/data/data";
import SectionHeading from "../../Shared/SectionHeading";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-16 bg-gray-200">
      <div className="w-[80%] mx-auto">
        <SectionHeading
        heading="Check Our Blogs"
        subHeading="We have a lot of interesting things to share with you"
        ></SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
          {blogs.map((blog) =>{
            return <div key={blog.id}>
              <BlogCard blog={blog}></BlogCard>
            </div>
          })}
        </div>
      </div>
      
    </div>
  );
};

export default Blog;