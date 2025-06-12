import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#0e0e0e] py-10">
      <div className="mx-auto container">
        <div className="font-DharmaPunk relative">
          <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
            About
          </h3>
          <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
            The Band
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-20 items-center font-Outfit">
          <div className="space-y-5 lg:pr-[100px] text-lg lg:max-w-[50%] max-md:px-8 max-md:pt-10">
            <p>
              A Rose for Ann is a pop punk band born from the heart of Kingston
              and Cornwall, Ontario, blending the raw energy of early 2000s punk
              with infectious modern melodies. With driving guitars, punchy
              drums, and earworm top lines, the band captures the spirit of the
              Warped Tour era while carving out a fresh sound all their own.
              Every track is a nod to the golden age of pop punk—hook-heavy,
              high-energy, and unapologetically emotional.
            </p>
            <p>
              Known for their electric live shows and singalong choruses, A Rose
              for Ann has quickly made a name for themselves in Ontario’s
              underground scene. Their music channels the angst, nostalgia, and
              adrenaline of growing up, falling apart, and getting back up
              again—with a sound that’s both familiar and fiercely original.
              Whether you’re moshing in the front row or blasting them on a
              summer drive, A Rose for Ann delivers the kind of pop punk that
              sticks with you long after the final chorus.
            </p>
          </div>
          <div className="h-[300px] lg:h-[500px] w-full">
            <Image
              src="/bandphoto.png"
              width={2000}
              height={1080}
              className="object-cover size-full rounded-2xl"
              alt="Band photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
