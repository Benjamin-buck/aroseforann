import Hero from "@/components/Hero";
import Tour from "@/components/Tour";

export default function Home() {
  return (
    <div className="">
      <section className="mb-[200px]">
        <Hero />
      </section>

      <section>
        <Tour />
      </section>
    </div>
  );
}
