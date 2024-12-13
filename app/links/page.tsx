import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { music } from "@/constants/music";

const LinksPage = () => {
  return (
    <div className="lg:mx-[500px]">
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
          <Link href="http://www.instagram.com/arose4ann">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/share/19gpHCYRaY/?mibextid=LQQJ4d">
            <FaFacebook />
          </Link>
          <Link href="https://www.youtube.com/@aroseforann">
            <SiYoutubemusic />
          </Link>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-3">
        <Link href="/">
          <button className="hover:bg-black bg-black w-full py-4 text-xl font-bold rounded-xl">
            Website
          </button>
        </Link>
        <Link href="https://open.spotify.com/artist/2TFcpb3xDt8tdmRfWdW48W?si=7JyGgNDZQRmxPv3SlRID8Q">
          <button className="hover:bg-black bg-green-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <FaSpotify className="text-3xl" />
            Spotify
          </button>
        </Link>
        <Link href="https://music.apple.com/us/artist/a-rose-for-ann/1683716723">
          <button className="hover:bg-black bg-red-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <SiApplemusic className="text-3xl" />
            Apple Music
          </button>
        </Link>
        <div className="border my-2" />
        <h2 className="text-3xl font-semibold text-center">Streaming Links:</h2>

        {music.map((link) => (
          <Link href={link.spotify} key={link.spotify}>
            <button className="hover:bg-black bg-red-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
              {link.musicIcon && <FaSpotify className="text-3xl" />}
              {link.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
