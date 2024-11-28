"use client";
import { navbarLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { IoLogoInstagram, IoMenu } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  function handleClick() {
    if (mobileNav === true) setMobileNav(false);
    if (mobileNav === false) setMobileNav(true);
  }
  return (
    <div className="z-10">
      <div className="bg-black py-2 font-semibold">
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
          <ul className="flex gap-4">
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
      </div>

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
          </ul>
          <IoMenu
            className="text-4xl max-sm:block hidden"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNav && (
        <div className="bg-black h-[100vh] w-full z-10 absolute top-0">
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
                className="border-b w-full text-center py-4 text-3xl font-semibold "
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
