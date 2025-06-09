import About from "@/components/About";
import Header from "@/components/Header";
import Members from "@/components/Members";
import Press from "@/components/Press";

export default function Home() {
  return (
    <div className="">
      <section className="mb-[200px]">
        <Header />
        <About />
        <Members />
        <Press />
      </section>
    </div>
  );
}
