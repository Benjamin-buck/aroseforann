/* eslint-disable @next/next/no-img-element */
// app/(external)/blog/[slug]/page.tsx

import Back from "@/components/Back";
import { formatDateToYMD } from "@/lib/utils";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  const post = posts[0];

  if (!post) {
    return <p>Post not found.</p>;
  }

  const tagIds = post.tags; // e.g. [5, 10, 11, 4, 8, 6, 12, 7, 9]

  const tagFetch = await fetch(
    `https://headlesscms.aroseforann.com/wp-json/wp/v2/tags?include=${tagIds.join(
      ","
    )}`
  );
  const tagData = await tagFetch.json();
  const tagNames = tagData.map((tag: { name: string }) => tag.name);

  return (
    <div className="font-Outfit mx-auto max-w-[800px] flex flex-col max-md:px-8 mb-12">
      <div className="mt-3">
        <Back className="mb-5" />
      </div>

      <img
        src={post.uagb_featured_image_src.large[0]}
        className="w-full h-[400px] rounded-[20px] object-cover"
        alt="test"
      />
      <div className="my-6 border-b border-gray-700 pb-3">
        <h1 className="text-3xl font-semibold">{post.title.rendered}</h1>
        <p className="text-gray-400">
          <span className="font-bold">Author:</span> A Rose for Ann{" "}
        </p>
        <p className="text-gray-400">Published: {formatDateToYMD(post.date)}</p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="space-y-6 pb-6 border-b border-gray-700 text-lg"
      />
      {tagNames && (
        <ul className="flex flex-wrap gap-2 text-sm text-pink-600 mt-3">
          {tagNames.map((tag: string, i: number) => (
            <li
              key={i}
              className="bg-gray-700 text-gray-200 px-2 py-1 rounded hover:underline"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
