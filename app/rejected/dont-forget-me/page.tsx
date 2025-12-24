import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";

const page = () => {
  return (
    <div className="p-8">
      <Link
        href={"/rejected"}
        className="font-Outfit text-lg flex gap-2 items-center"
      >
        <BiLeftArrow />
        Go Back
      </Link>
      <div className="flex w-full items-center justify-center pt-[200px] drop-shadow-sm">
        <Image
          src={"/dont-forget-me-title.svg"}
          width={500}
          height={200}
          alt="Don't Forget Me"
        />
      </div>
      <div className="max-w-[600px] mx-auto text-xl">
        <p>[Verse]</p>
        <p>When summer&apos;s over</p>
        <p>And you fly back to Tennessee</p>
        <p>I should&apos;ve told you</p>
        <p>To stay here with me</p>
      </div>
    </div>
  );
};

export default page;
