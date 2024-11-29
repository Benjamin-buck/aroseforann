import { navbarLinks, supportLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mt-[100px] py-5 w-full border-t border-brand-red">
      <div className="mx-auto container flex max-md:flex-col max-md:items-center max-md:text-center">
        <div className="w-[40%] flex justify-center">
          <Image
            src="/aroseforann-logo-black.png"
            height={101}
            width={117}
            alt={"A Rose for Ann Logo"}
          />
        </div>

        <div className="flex-1 flex justify-between max-md:flex-col max-md:gap-4 max-md:mt-4">
          <div>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul>
              {navbarLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-brand-red font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Support</h3>
            <ul>
              {supportLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-brand-red font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul>
              {navbarLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-brand-red font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul>
              {navbarLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-brand-red font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
