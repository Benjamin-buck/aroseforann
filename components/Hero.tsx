const Hero = () => {
  return (
    <div className="mx-auto container h-[65vh] flex justify-center flex-col gap-4 max-md:gap-2">
      <p className="text-bold text-brand-red text-xl font-semibold">
        New Release Alert
      </p>
      <h1 className="text-6xl font-bold max-md:text-4xl">Fucked Up In Vegas</h1>
      <p className="max-w-[600px]">
        A Rose for Anns latest single is set to release on November 28, 2024.
        Make sure youre ready and pre-save the song to your streaming platform
      </p>
      <button className="bg-brand-red py-2 px-6 rounded-md w-fit font-bold max-md:mt-2">
        Pre-save Now
      </button>
    </div>
  );
};

export default Hero;
