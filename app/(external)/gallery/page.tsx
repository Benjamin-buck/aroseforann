import { gallery } from "@/constants/gallery";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="mx-auto container">
      <div className="font-DharmaPunk relative">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
          Photo
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
          Gallery
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[80px]">
        {gallery.map((photo) => (
          <Image
            key={photo}
            src={photo}
            width={1000}
            height={1000}
            alt="Ben"
            className="size-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
