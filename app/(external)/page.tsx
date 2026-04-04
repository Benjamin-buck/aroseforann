import About from "@/components/About";
import Header from "@/components/Header";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import Members from "@/components/Members";

export default function Home() {
  return (
    <div className="">
      <section className="mb-[200px]">
        <Header />
        <About />
        <Members />
        <LatestBlogPosts />
      </section>
    </div>
  );
}
