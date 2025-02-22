import { buildings } from "@/data/data";
import SectionHeading from "../../Shared/SectionHeading";
import PropertyFeaturesCard from "./PropertyFeaturesCard";

const PropertyFeatures = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading
        heading="Property Features"
        subHeading="We provide the best properties for you. Check out our latest properties."
        ></SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
          {buildings.map((building,i) =>{
            return <div key={building.id}
            data-aos="fade-left" 
            data-aos-delay={`${i * 150}`}
            data-aos-anchor-placement ="top-center"
            >
              <PropertyFeaturesCard building={building}></PropertyFeaturesCard>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;