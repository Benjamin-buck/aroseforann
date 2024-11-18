import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh] max-md:flex-col">
      <Image
        src="/aroseforann-logo-black.png"
        width={858}
        height={717}
        alt="logo"
        className="scale-50"
      />
      <h1 className="text-6xl font-bold max-md:text-center px-6  max-md:text-2xl">
        Our site is currently under maintenance.
      </h1>
    </div>
  );
}
