import React from "react";

interface Props {
  params: {
    slug: Promise<{ slug: string[] }>;
  };
}
const page = async ({ params }: Props) => {
  const { slug } = params;

  const getPost = async () => {
    const res = await fetch(
      `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    return res.json();
  };

  const postData = await getPost();
  const post = postData[0];

  return (
    <div>
      <p>{post.title.rendered}</p>
    </div>
  );
};

export default page;
