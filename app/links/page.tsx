import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

const links = [
  {
    label: "Liar",
    href: "https://open.spotify.com/track/0PSoN8wrG2BuoTV4CBPYfq?si=22c6aceb021d437d",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "Happy Ever After",
    href: "https://open.spotify.com/track/2xsVorGLX5juwL3M1yqyL0?si=85f3f85fa2c8436e",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "Hold You Like a Secret",
    href: "https://open.spotify.com/track/5rh3ncNBuOnPuJxabnUbHN?si=6f969b7817c34c5c",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "Catch 22",
    href: "https://open.spotify.com/track/3wLf5LT6Sb0iDLQaSmGopl?si=a3e80c424aca4b66",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "S.O.S",
    href: "https://open.spotify.com/track/2dkeqUpTejyQaMmP7XkKcF?si=f23362c665574798",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "Beccas Song",
    href: "https://open.spotify.com/track/1OpjuVJwtH1Gduj5JCd47t?si=0b152f17c196433f",
    musicIcon: true,
    backgroundColor: "red-500",
  },
  {
    label: "Love Me or Leave Me",
    href: "https://open.spotify.com/track/7MuTzMPU97rFnItECb9VFX?si=ef30efff708c4d99",
    musicIcon: true,
    backgroundColor: "red-500",
  },
];

const LinksPage = () => {
  return (
    <div className="lg:mx-[500px]">
      <div className="flex w-full justify-center py-10">
        <Image
          src="/aroseforann-logo-black.png"
          alt="Logo"
          height={101}
          width={117}
          className="scale-[140%]"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl  font-bold">A Rose for Ann</h1>
        <p>A Canadian pop-punk band. New music coming out soon!</p>
        <div className="flex justify-center my-2 text-3xl gap-2">
          <Link href="http://www.instagram.com/arose4ann">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/share/19gpHCYRaY/?mibextid=LQQJ4d">
            <FaFacebook />
          </Link>
          <Link href="https://www.youtube.com/@aroseforann">
            <SiYoutubemusic />
          </Link>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-3">
        <Link href="/">
          <button className="hover:bg-black bg-black w-full py-4 text-xl font-bold rounded-xl">
            Website
          </button>
        </Link>
        <Link href="https://open.spotify.com/artist/7G9PGkPgXRlumAUEXBh2uY?si=yXdrQhX4StmogFYLa_WCSA">
          <button className="hover:bg-black bg-green-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <FaSpotify className="text-3xl" />
            Spotify
          </button>
        </Link>
        <Link href="https://music.apple.com/us/artist/benjamin-alan/1497080917">
          <button className="hover:bg-black bg-red-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
            <SiApplemusic className="text-3xl" />
            Apple Music
          </button>
        </Link>
        <div className="border my-2" />
        <h2 className="text-3xl font-semibold text-center">Streaming Links:</h2>

        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <button className="hover:bg-black bg-red-500 w-full py-4 text-xl font-bold rounded-xl flex gap-4 items-center justify-center">
              {link.musicIcon && <FaSpotify className="text-3xl" />}
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
