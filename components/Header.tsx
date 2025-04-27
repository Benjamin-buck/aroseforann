import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="mx-auto container h-[600px] flex max-lg:flex-col">
      <div className="lg:w-[50%] max-lg:px-12">
        <Image
          src="/game2you.PNG"
          width={1000}
          height={1000}
          alt="Game To You Album Cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="pl-12 flex items-center max-lg:mt-6">
        <div>
          <h2 className="text-xl font-bold text-red-500 ">New Release</h2>
          <h1 className="text-5xl font-bold">Game 2 You</h1>
          <p>
            Our latest single Game 2 You is coming out on May 3, 2025! Presave
            the track so you dont miss out on release day.
          </p>
          <Link href="https://distrokid.com/hyperfollow/aroseforann/game-2-you">
            <button className="bg-red-500 text-white px-6 py-3 text-lg font-semibold rounded-lg mt-6 hover:bg-red-700">
              Pre-Save on Spotify
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
