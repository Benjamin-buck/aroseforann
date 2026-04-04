// app/(external)/blog/page.tsx

export const dynamic = "force-dynamic";

import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  type: string;
  status: string;
  publishedAt: string;
  updatedAt: string;
};

const BlogPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://bandaccount.com";
  const res = await fetch(`${baseUrl}/api/v1/blog`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Blog API error:", res.status, text.slice(0, 500));
    return <p className="mx-auto container mt-10">Failed to load blog posts.</p>;
  }

  const data = await res.json();
  const posts: BlogPost[] = data.posts;

  return (
    <div className="mx-auto container mb-10">
      <div className="font-DharmaPunk relative mb-[50px]">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
          Latest
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
          Blog Posts
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-0 mt-[60px] max-md:mx-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="border border-gray-700 rounded-lg p-5 flex flex-col gap-3 hover:border-brand-orange transition-colors duration-300"
          >
            {post.coverImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full h-[200px] object-cover rounded-md"
              />
            )}
            <p className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            {post.excerpt && (
              <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
            )}
            <span className="text-brand-orange font-semibold text-sm mt-auto">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
