"use client";
import { navbarLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  function handleClick() {
    if (mobileNav === true) setMobileNav(false);
    if (mobileNav === false) setMobileNav(true);
  }
  return (
    <div className="max-sm:px-6 z-50 border-b border-gray-700">
      {/* <div className="bg-gray-800 py-2 font-semibold">
        <div className="mx-auto container flex justify-between max-md:px-6 items-center">
          <p className="max-md:hidden">
            Sign up for the A Rose For Ann fanclub!
          </p>
          <div className="flex gap-3">
            <Link
              href="https://open.spotify.com/artist/2TFcpb3xDt8tdmRfWdW48W?si=ZHwoV4TMQ5qEFLLhyvP9Ew"
              target="blank"
            >
              <FaSpotify className="hover:text-brand-red" />
            </Link>
            <Link
              href="https://music.apple.com/us/artist/a-rose-for-ann/1683716723"
              target="blank"
            >
              <SiApplemusic className="hover:text-brand-red" />
            </Link>

            <Link href="https://www.instagram.com/arose4ann" target="blank">
              <IoLogoInstagram />
            </Link>
          </div>
          <Link href="/links">Stream Now</Link>
          {/* <ul className="flex gap-4">
            <li>
              <Link href="/login" className="hover:text-brand-red">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-brand-red">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="py-5 max-sm:px-6">
        <div className="mx-auto container flex justify-between items-center">
          <Link href="/">
            <Image
              src="/aroseforann-logo-black.png"
              height={101}
              width={117}
              alt="Logo"
            />
          </Link>
          <ul className="flex gap-8 max-sm:hidden">
            {navbarLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-lg font-semibold hover:text-brand-red transition-all duration-300"
                  key={href}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                target="_blank"
                href="https://shop.aroseforann.com/"
                className="text-lg font-semibold hover:text-brand-red transition-all duration-300"
              >
                Shop
              </Link>
            </li>
          </ul>
          <IoMenu
            className="text-4xl max-sm:block hidden"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNav && (
        <div className="bg-black w-[100dvw] h-[100vh] z-[100] absolute top-0 left-0 stop-scrolling">
          <Image
            src="/aroseforann-logo-black.png"
            height={101}
            width={117}
            alt="Logo"
            className="mx-auto mt-6 mb-4"
          />

          <ul className="flex flex-col items-center">
            {navbarLinks.map(({ label, href }) => (
              <Link
                href={href}
                onClick={handleClick}
                className=" w-full text-center py-4 text-3xl font-semibold"
                key={href}
              >
                {label}
              </Link>
            ))}

            <Link
              target="_blank"
              href="https://shop.aroseforann.com/"
              className=" w-full text-center py-4 text-3xl font-semibold"
            >
              Shop
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
