interface Props {
  params: {
    slug: string;
  };
}
const page = async ({ params }: Props) => {
  const res = await fetch(
    `https://headlesscms.aroseforann.com/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const postData = await res.json();
  const post = postData[0];

  return (
    <div>
      <p>{post.title.rendered}</p>
    </div>
  );
};

export default page;
