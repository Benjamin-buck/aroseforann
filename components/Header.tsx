import Countdown from "@/app/rejected/CountDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative w-full min-h-[120px] sm:min-h-0">
      {/* Background image — natural aspect ratio so full width is visible */}
      <Image
        src="/show-poster-june2026.png"
        alt="A Rose For Ann – Live Show June 27, 2026"
        width={960}
        height={212}
        priority
        className="w-full h-auto"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      {/* Event card — centered, half hanging below the banner */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-2xl px-2 sm:px-4">
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-4 sm:px-8 sm:py-6 shadow-2xl">
          <p className="font-Outfit text-white/70 text-xs uppercase tracking-widest">
            Live in Kingston, Ontario
          </p>
          <h2 className="font-Outfit text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
            June 27, 2026 &middot; 8:00 PM EST
          </h2>
          <p className="font-Outfit text-white/60 text-xs uppercase tracking-widest">
            Featuring Listen Up Kid &bull; Saturn Sunrise &bull; Nocturnica
          </p>
          <div className="scale-75 sm:scale-90 md:scale-100 origin-center">
            <Countdown targetDate="2026-06-27T20:00:00-05:00" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-1">
            <Link
              href={"https://bandaccount.com/shows/cmnlrp39m0001jx04hyac0nxj"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-Outfit text-sm sm:text-lg font-semibold bg-brand-orange text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Get Tickets
            </Link>
            <Link
              href={"https://shop.aroseforann.com/"}
              className="font-Outfit text-sm sm:text-lg font-semibold border-2 border-white/70 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
            >
              Shop <span className="hidden lg:inline">Merchandise</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
