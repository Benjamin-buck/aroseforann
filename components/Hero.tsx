import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto container h-[65vh] flex justify-center gap-4 max-md:gap-2 max-lg:flex-col-reverse max-lg:mt-[150px] max-md:mt-10">
      <div className="w-[45%] flex flex-col justify-center gap-2 max-lg:w-auto">
        <p className="text-bold text-brand-red text-xl font-semibold ">
          New Release Alert
        </p>
        <h1 className="text-6xl font-bold max-md:text-4xl">
          Fucked Up In Vegas
        </h1>
        <p>
          A Rose for Anns latest single is set to release on November 28, 2024.
          Make sure youre ready and pre-save the song to your streaming platform
        </p>
        <button className="bg-brand-red py-2 px-6 rounded-md w-fit font-bold mt-2">
          Pre-save Now
        </button>
      </div>
      <div className="flex-1 flex items-center">
        <Image src="/band.png" width={1920} height={834} alt="band photo" />
      </div>
    </div>
  );
};

export default Hero;
