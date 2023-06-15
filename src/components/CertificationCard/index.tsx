import { ICertificateCard } from "@/types/global";
import Image from "next/image";
export const CertificationCard = (props: ICertificateCard) => {
  return (
    <div className='first-letter:overflow-hidden cursor-pointer'>
      <div className='border-2 rounded-3xl lg:h-fit w-fit md:h-1/4 sm:h-fit border-gray-400/50 ml-4 mr-4 justify-between items-center mt-10 opacity-75 shadow-lg hover:shadow-2xl hover:opacity-100 hover:-translate-y-3 transition ease-in-out duration-300 flex flex-col h-full lg:w-fit overflow-hidden'>
        <a href={props.url} target="_blank">
          <div className="flex h-full w-fit items-center justify-center rounded-t-2xl ">
            <Image 
             className="" 
            src={props.image} 
            alt={props.alt}
            width={300}
            height={300}
            />
          </div>
        </a>
      </div>
    </div>
  );
};