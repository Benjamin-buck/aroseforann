import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="mx-auto relative container h-[80%]">
        <Image
          src="/bg-photo.png"
          width={2080}
          height={1920}
          alt="band-photo"
          className="object-cover h-full w-[100%]"
        />
        <div className="absolute top-0 left-0 size-full max-md:px-10">
          <div>
            <h2 className="text-[40px] font-DharmaPunk z-50 -rotate-2 absolute lg:top-[35%] top-[60%] lg:-left-2  text-brand-orange">
              The Tour
            </h2>
            <h1 className="lg:text-[80px] text-[50px] max-md:text-center font-DharmaPunk absolute lg:top-[38%] top-[65%] z-10">
              Better off Broken
            </h1>
          </div>
          <div className="size-full flex items-center">
            <div className=" w-full lg:mt-[100px] mt-[350px] lg:text-4xl text-2xl space-x-5">
              <Link
                href="/tour"
                className="font-DharmaPunk  hover:text-white text-brand-orange"
              >
                Get Tickets
              </Link>
              <Link
                href="https://shop.aroseforann.com"
                className="font-DharmaPunk hover:text-white text-brand-orange"
              >
                Merchandise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
