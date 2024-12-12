import Image from "next/image";
import Link from "next/link";
import { MdLibraryMusic } from "react-icons/md";

const Hero = () => {
  return (
    <div className="mx-auto container h-[65vh] flex justify-center gap-4 max-md:gap-2 max-lg:flex-col-reverse max-lg:mt-[150px] max-md:mt-10">
      <div className="w-[55%] flex flex-col justify-center gap-2 max-lg:w-auto">
        <p className="text-bold text-brand-red text-xl font-semibold ">
          Press Release
        </p>
        <h1 className="text-6xl font-bold max-md:text-4xl">
          Better Off Broken <span className="text-brand-red">Out Now</span>!
        </h1>
        <p className="text-lg">
          Stream our latest project Better Off Broken on all streaming platforms
          now!
        </p>
        <Link href="/music">
          <button className="bg-brand-red py-2 px-6 rounded-md w-fit font-bold mt-2 flex gap-2 items-center">
            <MdLibraryMusic />
            Stream now!
          </button>
        </Link>
      </div>
      <div className="flex-1 flex items-center">
        {/* <Image src="/band.png" width={1920} height={834} alt="band photo" /> */}
        <Image
          src="/avatar.png"
          width={1000}
          height={1000}
          alt="band photo"
          className="scale-50"
        />
      </div>
    </div>
  );
};

export default Hero;
