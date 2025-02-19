import Image from "next/image";

type Props = {
  type : {
    id: number;
    icon: string;
    type: string;
    number: number;
}
}

const ApartmentCard = ({ type } : Props) => {
  return (
    <div className="flex  flex-col items-center justify-center">
      <div className="rounded-lg w-[250px] h-[400px] text-center shadow-lg p-6 hover:scale-110 transition-all duration-300">
        <Image className="items-center flex w-full" src={type.icon} alt="image" width={70} height={70}></Image>
        <div className="mt-12">
          <h1 className="text-lg font-bold">{type.type}</h1>
          <p className="mt-2 text-sm text-gray-800">{type.number}+ Properties</p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;