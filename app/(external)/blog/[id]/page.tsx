// app/(external)/blog/[id]/page.tsx

import { notFound } from "next/navigation";

const IndividualBlogPage = async ({ params }: { params: { id: string } }) => {
  const getPostById = async (id: string) => {
    const res = await fetch(
      `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts/${id}`,
      { next: { revalidate: 60 } } // Optional: ISR caching
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  };

  const post = await getPostById(params.id);

  if (!post) return notFound();

  return (
    <div className="flex flex-col justify-center items-center w-full m-auto max-w-[800px] mb-12">
      {post?.uagb_featured_image_src?.large?.[0] && (
        <img
          src={post.uagb_featured_image_src.large[0]}
          alt={post.title.rendered}
          className="h-[300px] lg:h-[500px] w-[800px] object-cover rounded-[30px]"
        />
      )}
      <div className="mt-6 w-full px-8">
        <h2 className="text-white text-3xl lg:text-5xl font-DharmaPunk">
          {post.title.rendered}
        </h2>
        <div
          className="mt-4 space-y-6 font-Outfit text-lg text-white"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
};

export default IndividualBlogPage;
