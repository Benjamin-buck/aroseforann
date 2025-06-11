/* eslint-disable @next/next/no-img-element */
// app/(external)/blog/[slug]/page.tsx

import Back from "@/components/Back";

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

  return (
    <div className="font-Outfit mx-auto max-w-[800px] flex flex-col max-md:px-8 mb-12">
      <div>
        <Back className="mb-5" />
      </div>

      <img
        src={post.uagb_featured_image_src.large[0]}
        className="w-full h-[400px] rounded-[20px] object-cover"
        alt="test"
      />
      <h1 className="text-3xl font-semibold my-5">{post.title.rendered}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="space-y-6"
      />
    </div>
  );
}
