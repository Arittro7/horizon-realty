import SectionHeading from "../../Shared/SectionHeading";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="py-16 bg-[#fef7f6]">
      <div className="w-[80%] mx-auto">
        <SectionHeading
        heading="Our Client Reviews"
        subHeading="Take a look at what our clients have to say about us."
        ></SectionHeading>
        <div className="mt-14">
          <ReviewSlider></ReviewSlider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;