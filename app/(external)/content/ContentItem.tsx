import { Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Content = {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
  url: string;
};

interface ContentProps {
  content: Content;
}

const ContentItem = ({ content }: ContentProps) => {
  return (
    <div className="border rounded-lg">
      <Image
        alt=""
        className="opacity-80 h-[250px] overflow-hidden"
        height={500}
        width={500}
        src={content.thumbnail}
      />
      <div className="p-3 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-lg line-clamp-1">{content.title}</p>
          <p>Date: Dec 13, 2025</p>
        </div>
        <Link
          href={content.url}
          target="_blank"
          className="border gap-1 flex rounded-lg hover:bg-gray-400 transition-all duration-300 items-center justify-center mt-6 w-full py-2 font-semibold text-lg"
        >
          <Share /> View on Platform
        </Link>
      </div>
    </div>
  );
};

export default ContentItem;
