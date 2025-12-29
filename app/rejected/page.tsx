"use client";
import React, { useState } from "react";
import Image from "next/image";
import Countdown from "./CountDown";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import MailchimpSubscribe from "@/components/MailchimpSubscribe";

const Rejected = () => {
  const [mailingList, setMailingList] = useState(false);

  return (
    <div className="max-md:px-5 pb-10">
      <div className="flex items-center justify-center pt-[150px] flex-col font-Outfit gap-5">
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
        <button
          onClick={() => setMailingList(!mailingList)}
          className="text-lg border-[3px] py-4 px-6 rounded-lg hover:cursor-pointer hover:bg-black drop-shadow-xs"
        >
          Join Our Mailing List And Get Notified
        </button>
        {mailingList && (
          <div>
            <h1>Join Our Newsletter</h1>
            <MailchimpSubscribe />
          </div>
        )}
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
            <p className="text-lg font-sembiold blur-[6px]">
              Don&apos;t Forget Me
            </p>
            <div>
              <p className="max-md:text-xs">Reveal on 01/01/2026</p>
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
            <p className="text-lg font-sembiold blur-[6px]">Chemistry</p>
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
            <p className="text-lg font-sembiold blur-[6px]">Taylor Swift</p>
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
            <p className="text-lg font-sembiold blur-[6px]">Black Dress</p>
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
            <p className="text-lg font-sembiold blur-[6px]">
              Shut Up And Leave
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
            <p className="text-lg font-sembiold blur-[6px]">Oxytocin</p>
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
            <p className="text-lg font-sembiold blur-[6px]">Better Off Dead</p>
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
