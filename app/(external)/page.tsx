import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tour from "@/components/Tour";

export default function Home() {
  return (
    <div className="">
      <section className="mb-[200px]">
        <Header />
      </section>

      <section>
        <Tour />
      </section>
    </div>
  );
}
