import Image from "next/image";
import React from "react";

const MerchPage = () => {
  return (
    <div className="mx-auto container">
      <h1 className="text-4xl font-semibold mb-5">
        Shop Our Latest Merchandise
      </h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image
            src="/merch.jpg"
            width={500}
            height={500}
            className="rounded-md"
          />
          <div className="py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Molly Graphic Tee</h2>
              <p className="text-2xl font-semibold">28$</p>
            </div>
            <p className="text-gray-400">
              The molly graphic tee is the perfect holiday gift for your
              pop-punk loved ones.
            </p>
          </div>
        </div>
        <div className="col-span-3 border">Test</div>
        <div className="col-span-3 border">Test</div>
        <div className="col-span-3 border">Test</div>
      </div>
    </div>
  );
};

export default MerchPage;
