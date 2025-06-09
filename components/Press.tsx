/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type Post = {
  id: string;
  title: {
    rendered: string;
  };
  uagb_featured_image_src: {
    large: string[];
  };
  excerpt: {
    rendered: string;
  };
};

/* eslint-disable jsx-a11y/alt-text */
const Press = async () => {
  const getAllPosts = async () => {
    const res = await fetch(
      "https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?per_page=4"
    );
    return res.json();
  };

  const posts = await getAllPosts();
  return (
    <section className="mx-auto container mt-[150px]">
      <div className="font-DharmaPunk relative">
        <h3 className="text-[50px] text-brand-orange max-md:px-10">Read Our</h3>
        <h2 className="text-[70px] absolute top-8 max-md:left-10">
          Latest Press
        </h2>
      </div>
      <div className="mt-[100px] grid grid-cols-12 gap-6">
        {posts.map((post: Post) => (
          <div key={post.id} className="col-span-3">
            <img
              src={post.uagb_featured_image_src.large[0]}
              className="w-full h-[300px] rounded-[20px] object-cover"
              alt="test"
            />
            <div className="mt-3">
              <h2 className="text-2xl font-Outfit font-semibold line-clamp-1">
                {post.title.rendered}
              </h2>
              <div
                className="line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex w-full items-center justify-center">
        <Link
          href="/blog"
          className="font-DharmaPunk text-4xl hover:text-brand-orange"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Press;
