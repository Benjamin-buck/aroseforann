import { FaSpotify } from "react-icons/fa";
import { SiTidal } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import Link from "next/link";
import { music } from "@/constants/music";
import { SiAmazonmusic } from "react-icons/si";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";

const MusicPage = () => {
  return (
    <div className="min-h-[70vh]">
      <div className="mx-auto container mt-10">
        <h1 className="text-4xl font-semibold text-center mb-6">Music</h1>
        {music.map((song) => (
          <div
            key={song.title}
            className="w-full bg-white text-black pl-3 pr-6 flex max-sm:flex-col max-sm:justify-normal max-sm:items-start max-sm:gap-4 justify-between items-center py-2 max-md:py-6 border-b"
          >
            <div className="flex gap-5 items-center max-md:flex-col max-md:items-start">
              <div className="flex gap-3">
                <Image
                  src={song.artwork}
                  width={50}
                  height={50}
                  alt="Album Art"
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/"
                    className="text-xl font-bold hover:underline hover:text-red-500"
                  >
                    {song.title}
                  </Link>
                  <p>by A Rose for Ann</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="font-semibold max-md:hidden">Stream now:</p>
              {song.tidal && (
                <Link href={song.tidal}>
                  <SiTidal className="text-3xl hover:text-red-500" />
                </Link>
              )}

              {song.amazonMusic && (
                <Link href={song.amazonMusic}>
                  <SiAmazonmusic className="text-3xl" />
                </Link>
              )}

              {song.appleMusic && (
                <Link href={song.appleMusic}>
                  <SiApplemusic className="text-3xl hover:text-red-500" />
                </Link>
              )}

              {song.spotify && (
                <Link href={song.spotify}>
                  <FaSpotify className="text-3xl hover:text-red-500" />
                </Link>
              )}

              {song.itunes && (
                <Link href={song.itunes}>
                  <button className="bg-black text-white font-semibold px-3 py-1 rounded-md hover:bg-red-500 max-md:hidden">
                    Buy Now
                  </button>
                  <BsFillCartPlusFill className="max-md:block hidden text-3xl" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
