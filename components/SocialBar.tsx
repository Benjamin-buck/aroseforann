import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const SocialBar = () => {
  return (
    <div>
      <div className="mx-auto container items-center max-md:px-8 hidden lg:flex justify-end gap-4">
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
        <Link
          href="https://www.youtube.com/@ARoseforAnn"
          className="hover:text-brand-orange"
        >
          <BsYoutube size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
