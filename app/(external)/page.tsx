import About from "@/components/About";
import Header from "@/components/Header";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import Members from "@/components/Members";

export default function Home() {
  return (
    <div className="">
      <section className="mb-[200px]">
        <Header />
        <div className="pt-56 sm:pt-52 md:pt-48" />
        <About />
        <Members />
        <LatestBlogPosts />
      </section>
    </div>
  );
}
