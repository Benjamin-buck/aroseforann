import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Image
        src="/aroseforann-logo-black.png"
        width={858}
        height={717}
        alt="logo"
        className="scale-50"
      />
    </div>
  );
}
