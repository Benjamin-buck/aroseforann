import Image from "next/image";

const members = [
  { src: "/connor.png", name: "Connor Longaphie", role: "Drummer" },
  { src: "/benjamin.jpg", name: "Benjamin Alan", role: "Singer / Guitarist" },
  { src: "/james.png", name: "James Baron", role: "Rhythm Guitarist" },
  { src: "/mike.png", name: "Mike Clayton", role: "Lead Guitarist" },
];

const Members = () => {
  return (
    <section className="py-20 mx-auto container px-6 lg:px-8">
      <div className="font-DharmaPunk relative mb-20">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
          Band
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
          Members
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {members.map(({ src, name, role }) => (
          <div key={name} className="flex flex-col items-center group">
            <div className="w-[220px] h-[220px] relative rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-brand-orange transition-all duration-300">
              <Image
                src={src}
                width={1000}
                height={1000}
                alt={name}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <p className="font-DharmaPunk text-3xl">{name}</p>
              <p className="font-Outfit text-brand-orange text-lg">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
