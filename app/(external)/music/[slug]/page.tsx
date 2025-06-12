/* eslint-disable @next/next/no-img-element */
// app/(external)/blog/[slug]/page.tsx

import Back from "@/components/Back";
import { SongApiResponse } from "@/lib/types";

export default async function MusicSlugPag({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `https://headlesscms.aroseforann.com/wp-json/wp/v2/song?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch song");
  }
  const songs = await res.json();
  const song: SongApiResponse = songs[0];

  if (!song) {
    return <p>No song found.</p>;
  }

  return (
    <div className="mx-auto container">
      <Back />
      {/* Song Metadata */}
      <section className="flex gap-4 mt-3">
        <img
          src={song.uagb_featured_image_src.large[0]}
          className="size-[200px] border border-gray-700 rounded-[20px] object-cover"
          alt="test"
        />
        <div>
          <h1 className="font-semibold">{song.title.rendered}</h1>
          <p className="text-gray-300">Release Date: {song.release_date}</p>
          <p>{song.song_description}</p>
        </div>
      </section>
      {/* Lyrics Section */}
      <section className="mt-6 mb-12">
        <h2>Lyrics:</h2>
        <div
          dangerouslySetInnerHTML={{ __html: song.content.rendered }}
          className="space-y-6 text-xl mt-6"
        />
      </section>
    </div>
  );
}
