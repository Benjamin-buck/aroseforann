// components/LatestBlogPosts.tsx

import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string | null;
  publishedAt: string;
};

const LatestBlogPosts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://bandaccount.com";
  const res = await fetch(`${baseUrl}/api/v1/blog`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  if (!res.ok) return null;

  const data = await res.json();
  const posts: BlogPost[] = (data.posts ?? []).slice(0, 4);

  if (!posts.length) return null;

  return (
    <section className="py-20 mx-auto container px-6 lg:px-8">
      <div className="font-DharmaPunk relative mb-20 flex items-end justify-between">
        <div className="relative">
          <h3 className="text-[50px] font-DharmaPunk text-brand-orange">
            Latest
          </h3>
          <h2 className="text-[70px] font-DharmaPunk absolute top-8">
            Blog Posts
          </h2>
        </div>
        <Link
          href="/blog"
          className="font-Outfit text-lg font-semibold text-brand-orange hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[60px]">
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
                className="w-full h-[160px] object-cover rounded-md"
              />
            )}
            <p className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            {post.excerpt && (
              <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
            )}
            <span className="text-brand-orange font-semibold text-sm mt-auto">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
