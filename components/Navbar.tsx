import { navbarLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="z-10">
      <div className="bg-black py-2 font-semibold">
        <div className="mx-auto container flex justify-between max-md:justify-end max-md: px-6">
          <p className="max-md:hidden">
            Sign up for the A Rose For Ann fanclub!
          </p>
          <ul className="flex gap-4">
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              <Link href="/signup">Register</Link>
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
                  className="text-lg font-semibold hover:text-accent transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <IoMenu className="text-4xl max-sm:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
