import Countdown from "@/app/rejected/CountDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative h-[90dvh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/rejected-bg.png"
        alt="background"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-4">
        <Image src="/rejected.svg" width={600} height={300} alt="rejected" className="drop-shadow-2xl max-w-[90vw]" />
        <Countdown targetDate="2026-03-06T00:00:00" />
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href={"/rejected"}
            className="font-Outfit text-lg font-semibold bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            More Details
          </Link>
          <Link
            href={"https://shop.aroseforann.com/"}
            className="font-Outfit text-lg font-semibold border-2 border-white/70 text-white px-6 py-3 rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
          >
            Shop <span className="hidden lg:inline">Merchandise</span>
          </Link>
          <Link
            href={"/tour"}
            className="font-Outfit text-lg font-semibold border-2 border-white/70 text-white px-6 py-3 rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
          >
            Tour Dates
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
