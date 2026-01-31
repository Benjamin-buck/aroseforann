import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

const page = () => {
  return (
    <div className="p-8">
      <Link
        href={"/rejected"}
        className="font-Outfit text-lg flex gap-2 items-center"
      >
        <BiLeftArrow />
        Go Back
      </Link>
      <div className="flex w-full items-center justify-center pt-[50px] drop-shadow-sm">
        <Image
          src={"/dont-forget-me-title.svg"}
          width={500}
          height={200}
          alt="Don't Forget Me"
        />
      </div>

      <div className="max-w-[1000px] mx-auto text-xl bg-white text-black p-5 rounded-lg shadow-lg shadow-gray-500">
        <div className="mb-6 flex justify-between border-b pb-5">
          <div>
            <h2>Don&apos;t Forget Me</h2>
            <p className="text-lg ">A Rose For Ann</p>
            <p className="text-sm text-gray-500">Released on: Jan 30, 2026</p>
          </div>
          <div className="flex gap-3">
            <BsSpotify />
            <SiApplemusic />
            <BsYoutube />
          </div>
        </div>

        <Tabs defaultValue="lyrics">
          <TabsList>
            <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
            <TabsTrigger value="lyric-video">Lyric Video</TabsTrigger>
            <TabsTrigger value="music-video">Music Video</TabsTrigger>
            <TabsTrigger value="credits">Credits</TabsTrigger>
          </TabsList>
          <TabsContent
            value="lyrics"
            className="py-5 md:text-md overflow-scroll"
          >
            {/* <iframe
              width="560"
              height="315"
              className="rounded-2xl w-full mb-8"
              src="https://www.youtube.com/embed/kRsR53QChu8?si=czi8NdfuD8xxw6Z8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
            <p className="font-bold">[Verse]</p>
            <p>When summer&apos;s over</p>
            <p>And you fly back to Tennessee</p>
            <p>I should&apos;ve told you</p>
            <p>To stay here with me</p>
            <br />
            <p>You went to college</p>
            <p>I stayed out late and joined the scene</p>
            <p>But maybe one day</p>
            <p>You&apos;ll end up with me</p>
            <br />
            <p className="font-bold">[Pre-Chorus]</p>
            <p>Fell in love for what it was</p>
            <p>
              Ride or die you{" "}
              <span className="blur hover:blur-none transition-all duration-300">
                fucked
              </span>{" "}
              it up
            </p>
            <p>Now I&apos;m sitting here without you</p>
            <p>Writing songs about you</p>
            <p>Promise me one thing</p>

            <br />
            <p className="font-bold">[Chorus]</p>
            <p>Don&apos;t forget about me</p>
            <p>Cause I&apos;m still hanging on</p>
            <p>I know it won&apos;t be long</p>
            <p>Don&apos;t forget about this</p>
            <p>Cause one day you&apos;ll wake up</p>
            <p>And know that you were wrong</p>
            <p>You were wrong</p>

            <br />
            <p className="font-bold">[Verse]</p>
            <p>You got your admission</p>
            <p>Who knew you&apos;d have the heart to leave</p>
            <p>I must admit it</p>
            <p>I thought you would run with me</p>
            <br />
            <p>Last time I saw you</p>
            <p>I sold out the club</p>
            <p>You bought a seat</p>
            <p>Do you remember</p>
            <p>The life you gave up with me</p>

            <br />
            <p className="font-bold">[Pre-Chorus]</p>
            <p>Fell in love for what it was</p>
            <p>
              Ride or die you{" "}
              <span className="blur hover:blur-none transition-all duration-300">
                fucked
              </span>{" "}
              it up
            </p>
            <p>Now I&apos;m sitting here without you</p>
            <p>Writing songs about you</p>
            <p>Promise me one thing</p>

            <br />
            <p className="font-bold">[Chorus]</p>
            <p>Don&apos;t forget about me</p>
            <p>Cause I&apos;m still hanging on</p>
            <p>I know it won&apos;t be long</p>
            <p>Don&apos;t forget about this</p>
            <p>Cause one day you&apos;ll wake up</p>
            <p>And know that you were wrong</p>
            <p>You were wrong</p>

            <br />
            <p className="font-bold">[Bridge]</p>
            <p>I Don&apos;t know who I am without you</p>
            <p>Everynight I fall apart</p>
            <p>Way too lost with no direction</p>
            <p>How did I get here (x2)</p>

            <br />
            <p>Finally I&apos;m okay without you</p>
            <p>Found myself in all these scars</p>
            <p>One day you&apos;ll wake up and miss me</p>
            <p>Watch me prove you wrong</p>

            <br />
            <p className="font-bold">[Chorus]</p>
            <p>Don&apos;t forget about me</p>
            <p>Cause I&apos;m still hanging on</p>
            <p>I know it won&apos;t be long</p>
            <p>Don&apos;t forget about this</p>
            <p>Cause one day you&apos;ll wake up</p>
            <p>And know that you were wrong</p>
            <p>You were wrong</p>

            <br />
            <p className="font-bold">[Outro]</p>
            <p>Finally I&apos;m okay without you</p>
            <p>Found myself in all these scars</p>
            <p>One day you&apos;ll wake up and miss me</p>
            <p>Watch me prove you wrong</p>

            <br />
          </TabsContent>
          <TabsContent value="credits" className="py-5 flex flex-col gap-4">
            <p>
              <span className="font-bold">Record Label:</span> Black Fox Records
            </p>
            <p>
              <span className="font-bold">Written By:</span> Benjamin Alan,
              James Baron
            </p>
            <p>
              <span className="font-bold">Producer:</span> Benjamin Alan
            </p>
            <p>
              <span className="font-bold">Mastering:</span> Luc Tellier
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
