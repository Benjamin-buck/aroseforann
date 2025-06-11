// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

type PostType = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: PageProps) {
  const res = await fetch(
    `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const posts: PostType[] = await res.json();

  if (!posts.length) return notFound();

  const post = posts[0];

  return (
    <article className="prose mx-auto p-4">
      <h1>{post.title.rendered}</h1>
      <p className="text-sm text-gray-500">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />
    </article>
  );
}
