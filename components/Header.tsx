import Countdown from "@/app/rejected/CountDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative h-[80dvh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/rejected-bg.png"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay (darken/lighten background) */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6">
        <Image src="/rejected.svg" width={600} height={300} alt="rejected" />
        <Countdown targetDate="2026-03-06T00:00:00" />
        <div className="flex items-center gap-3">
          <Link
            href={"/rejected"}
            className="font-Outfit text-xl border-2 px-5 py-2 rounded-lg hover:bg-black hover:border-none hover:border-2"
          >
            More Details
          </Link>
          <Link
            href={"https://shop.aroseforann.com/"}
            className="font-Outfit text-xl border-2 px-5 py-2 rounded-lg hover:bg-black hover:border-none hover:border-2"
          >
            Shop <span className="hidden lg:block">Merchandise</span>
          </Link>
          <Link
            href={"/tour"}
            className="font-Outfit text-xl border-2 px-5 py-2 rounded-lg hover:bg-black hover:border-none hover:border-2"
          >
            Tour Dates
          </Link>
        </div>

        <div className="container mx-auto text-center">
          {/* Your links / nav / CTA here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
