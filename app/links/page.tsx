import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const LinksPage = () => {
  return (
    <div>
      <div className="flex w-full justify-center py-10">
        <Image
          src="/aroseforann-logo-black.png"
          alt="Logo"
          height={101}
          width={117}
          className="scale-[140%]"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl  font-bold">A Rose for Ann</h1>
        <p>A Canadian pop-punk band. New music coming out soon!</p>
        <div className="flex justify-center my-2 text-3xl gap-2">
          <FaInstagram />
          <FaInstagram />
          <FaInstagram />
        </div>
      </div>
      <div className="my-8 flex flex-col gap-3">
        <h1 className=" text-2xl text-center font-bold">Streaming</h1>
        <Link href="/">
          <button className="bg-green-500 w-full py-4 text-xl font-bold rounded-xl">
            Spotify
          </button>
        </Link>
        <Link href="/">
          <button className="bg-red-500 w-full py-4 text-xl font-bold rounded-xl">
            Apple Music
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinksPage;
