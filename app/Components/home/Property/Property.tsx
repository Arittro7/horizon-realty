import { properties } from "@/data/data";
import SectionHeading from "../../Shared/SectionHeading";
import PropertyCard from "./PropertyCard";

const Property = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading
        heading="Discover our Properties"
        subHeading="We have a wide range of properties for you to choose from"
        ></SectionHeading>
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((property) => {
            return  (
            <div key={property.id}>
              <PropertyCard property={property}></PropertyCard>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Property;