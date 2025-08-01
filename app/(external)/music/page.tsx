import { SongApiResponse } from "@/lib/types";
import Link from "next/link";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

/* eslint-disable @next/next/no-img-element */
const MusicPage = async () => {
  const getAllMusic = async () => {
    const res = await fetch(
      "https://headlesscms.aroseforann.com/wp-json/wp/v2/song",
      { cache: "no-store" }
    );
    return res.json();
  };

  const songs = await getAllMusic();
  return (
    <div className="mx-auto container max-md:px-8 mb-12">
      <div className="font-DharmaPunk relative mb-[50px]">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange">
          Listen to
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 ">
          Our Music
        </h2>
      </div>
      <div className="flex gap-2 flex-col ">
        {songs.map((song: SongApiResponse) => (
          <div
            key={song.id}
            className="border border-gray-700 rounded w-full flex justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <img
                src={song.uagb_featured_image_src.large[0]}
                className=" h-[75px] w-[75px] rounded object-cover"
                alt="test"
              />
              <Link
                href={`/music/${song.slug}`}
                className="lg:text-xl text-md font-semibold "
              >
                {song.title.rendered}
              </Link>
            </div>
            <div className="pr-8 flex gap-4 items-center">
              {song.spotify_url && (
                <Link href={song.spotify_url} target="_blank">
                  <BsSpotify className="text-3xl" />
                </Link>
              )}
              {song.apple_music_url && (
                <Link href={song.apple_music_url} target="_blank">
                  <SiApplemusic className="text-3xl" />
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
