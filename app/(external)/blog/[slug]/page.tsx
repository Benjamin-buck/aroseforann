// app/(external)/blog/[slug]/page.tsx

export const dynamic = "force-dynamic";

import Back from "@/components/Back";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  publishedAt: string;
};

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://bandaccount.com";
  const res = await fetch(`${baseUrl}/api/v1/blog?slug=${slug}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Blog slug API error:", res.status, text.slice(0, 500));
    return <p>Post not found.</p>;
  }

  const data = await res.json();
  console.log("Blog slug API response:", JSON.stringify(data).slice(0, 500));
  const post: BlogPost = data.posts?.[0];

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="font-Outfit mx-auto max-w-[800px] flex flex-col max-md:px-8 mb-12">
      <div className="mt-3">
        <Back className="mb-5" />
      </div>

      {post.coverImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImageUrl}
          className="w-full h-[400px] rounded-[20px] object-cover"
          alt={post.title}
        />
      )}

      <div className="my-6 border-b border-gray-700 pb-3">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <p className="text-gray-400">
          Published:{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="space-y-6 pb-6 border-b border-gray-700 text-lg"
      />
    </div>
  );
}
