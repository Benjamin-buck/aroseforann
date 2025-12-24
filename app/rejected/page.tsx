import React from "react";
import Image from "next/image";
import Countdown from "./CountDown";
import { Facebook, Instagram } from "lucide-react";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { GrAppleMusic } from "react-icons/gr";
import { SiApplemusic } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";

const Rejected = () => {
  return (
    <div className="max-md:px-5">
      <div className="flex items-center justify-center pt-[300px] flex-col font-Outfit gap-5">
        <Image src={"/rejected.svg"} width={600} height={200} alt="rejected" />
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/people/A-Rose-For-Ann/61569767095756/">
            <Facebook />
          </Link>
          <Link href="https://www.instagram.com/arose4ann">
            <Instagram />
          </Link>

          <Link href="https://www.tiktok.com/@arose4ann">
            <AiFillTikTok size={25} />
          </Link>
          <Link href="https://open.spotify.com/artist/2TFcpb3xDt8tdmRfWdW48W?si=7JyGgNDZQRmxPv3SlRID8Q&nd=1&dlsi=a7998b13185e4587">
            <FaSpotify size={22} />
          </Link>
          <Link href="https://music.apple.com/us/artist/a-rose-for-ann/1683716723">
            <SiApplemusic size={22} />
          </Link>
        </div>
        <Countdown targetDate="2026-01-30T00:00:00" />
      </div>
      <div className="bg-white mt-10 max-w-[800px] mx-auto text-black p-4 rounded">
        <div className="flex items-center gap-4 py-2">
          <Image
            src={"/dont-forget-me.png"}
            width={60}
            height={60}
            alt="album"
            className="rounded-lg blur-sm"
          />
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-sembiold blur-sm">
              Don&apos;t Forget Me
            </p>
            <div>
              {/* <button className="bg-green-600 text-white p-3 rounded-lg font-semibold">
                Pre-Save
              </button> */}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 py-2">
          <Image
            src={"/dont-forget-me.png"}
            width={60}
            height={60}
            alt="album"
            className="rounded-lg blur-sm"
          />
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-sembiold blur-sm">Chemistry</p>
            <div>
              {/* <button className="bg-green-600 text-white p-3 rounded-lg font-semibold">
                Pre-Save
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rejected;
