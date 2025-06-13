import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

const SocialBar = () => {
  return (
    <div className="w-full">
      <div className="mx-auto container max-md:px-8 flex justify-end pt-2 gap-4">
        <Link
          href="http://instagram.com/arose4ann"
          className="hover:text-brand-orange"
        >
          <BsInstagram size={20} />
        </Link>
        <Link
          href="https://www.facebook.com/people/A-Rose-For-Ann/61569767095756/"
          className="hover:text-brand-orange"
        >
          <BsFacebook size={20} />
        </Link>
        <Link
          href="https://www.tiktok.com/@arose4ann"
          className="hover:text-brand-orange"
        >
          <BsTiktok size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
