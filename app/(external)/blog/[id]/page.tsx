const IndividualBlogPage = async ({ params }: { params: { id: string } }) => {
  const getPostById = async (id: string) => {
    const res = await fetch(
      `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?id=${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const posts = await res.json();

    return posts.length > 0 ? posts[0] : null;
  };

  const post = await getPostById(params.id);

  return (
    <div className="flex flex-col justify-center items-center w-full m-auto max-w-[800px] mb-12">
      <img
        src={post.uagb_featured_image_src.large[0]}
        className="h-[300px] lg:h-[500px] w-[800px] object-cover rounded-[30px]"
      />
      <div className="mt-6 w-full px-8">
        <h2 className="text-white text-3xl lg:text-5xl font-DharmaPunk">
          {post.title.rendered}
        </h2>
        <div
          className="mt-4 space-y-6 font-Outfit text-lg"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
};

export default IndividualBlogPage;
