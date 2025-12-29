import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { TbShirt } from "react-icons/tb";
import { Bus, Mail } from "lucide-react";

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
        <p className="text-lg">
          A Canadian pop-punk band from Kingston / Cornwall Ontario
        </p>
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
          <button className=" flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl">
            <CgWebsite /> View Website
          </button>
        </Link>
        <Link href="https://shop.aroseforann.com/">
          <button className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl">
            <TbShirt /> Merch
          </button>
        </Link>
        <Link href="/tour">
          <button className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl">
            <Bus /> Tour Dates
          </button>
        </Link>
        <Link href="/mailing-list">
          <button className="flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-600 hover:text-white w-full py-4 text-xl font-bold rounded-xl">
            <Mail /> Sign Up For Our Mailing List (NEW)
          </button>
        </Link>
        {/* <Link href="/blog">
          <button className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl">
            <Bus /> Blog
          </button>
        </Link> */}

        <div className="border my-2" />
        <h2 className="text-3xl font-semibold text-center">Streaming Links:</h2>
        <Link href="https://open.spotify.com/artist/2TFcpb3xDt8tdmRfWdW48W?si=7JyGgNDZQRmxPv3SlRID8Q">
          <button className="bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <FaSpotify className="text-3xl" />
            Spotify
          </button>
        </Link>
        <Link href="https://music.apple.com/us/artist/a-rose-for-ann/1683716723">
          <button className="bg-brand-orange hover:bg-orange-800 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <SiApplemusic className="text-3xl" />
            Apple Music
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinksPage;
