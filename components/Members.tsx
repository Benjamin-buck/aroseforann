import Image from "next/image";

const Members = () => {
  return (
    <section className="mt-10 mx-auto container">
      <div className="font-DharmaPunk relative">
        <h3 className="text-[50px] text-brand-orange max-md:px-10">Band</h3>
        <h2 className="text-[70px] absolute top-8 max-md:left-10">Members</h2>
      </div>
      <div className=" mt-[80px] grid grid-cols-10 gap-10">
        <div className="lg:col-span-2 col-span-10 relative flex items-center justify-center flex-col ">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/default.webp"
              width={1000}
              height={1000}
              alt="Benjamin Alan"
              className="size-full object-cover rounded-full top-0 left-0"
            />
          </div>
          <div className="lg:col-span-2 col-span-10 mt-2 flex flex-col justify-center items-center">
            <p className="font-DharmaPunk text-4xl">Connor Longaphie</p>
            <p className="font-Outfit text-xl">Drummer</p>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-10  relative flex items-center justify-center flex-col ">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/default.webp"
              width={1000}
              height={1000}
              alt="Benjamin Alan"
              className="size-full object-cover rounded-full top-0 left-0"
            />
          </div>
          <div className="lg:col-span-2 col-span-10 mt-2 flex flex-col justify-center items-center">
            <p className="font-DharmaPunk text-4xl">Lee Croteau</p>
            <p className="font-Outfit text-xl">Bass</p>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-10  relative flex items-center justify-center flex-col ">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/benjamin.jpg"
              width={1000}
              height={1000}
              alt="Benjamin Alan"
              className="size-full object-cover rounded-full top-0 left-0"
            />
          </div>
          <div className="lg:col-span-2 col-span-10 mt-2 flex flex-col justify-center items-center">
            <p className="font-DharmaPunk text-4xl">Benjamin Alan</p>
            <p className="font-Outfit text-xl">Singer / Guitarist</p>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-10  relative flex items-center justify-center flex-col ">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/default.webp"
              width={1000}
              height={1000}
              alt="Benjamin Alan"
              className="size-full object-cover rounded-full top-0 left-0"
            />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <p className="font-DharmaPunk text-4xl">James Baron</p>
            <p className="font-Outfit text-xl">Rhythm Guitarist</p>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-10  relative flex items-center justify-center flex-col ">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/default.webp"
              width={1000}
              height={1000}
              alt="Benjamin Alan"
              className="size-full object-cover rounded-full top-0 left-0"
            />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <p className="font-DharmaPunk text-4xl">Mike Clayton</p>
            <p className="font-Outfit text-xl">Lead Guitarist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
