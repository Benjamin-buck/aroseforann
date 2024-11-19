import Hero from "@/components/Hero";
import Tour from "@/components/Tour";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <section className="mb-[200px]">
        <Hero />
      </section>

      <section>
        <Tour />
      </section>
    </div>
  );
}
