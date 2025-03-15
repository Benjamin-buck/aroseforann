import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <Image
        src="/header.avif"
        width={1920}
        height={1000}
        alt="Header image"
        className="h-[600px] w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center max-md:px-5 px-[100px]">
        <div className="max-md:text-center">
          <h2 className="text-5xl font-bold">Better Off Broken Tour</h2>
          <p>Come see us perform our new album Better Off Broken live!</p>

          <button className="bg-red-500 text-white font-semibold px-8 py-2 rounded-lg mt-3">
            Tour Dates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
