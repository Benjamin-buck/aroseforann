import Tour from "@/components/Tour";
import React from "react";

const TourPage = () => {
  return (
    <div className="mx-auto container">
      <div className="font-DharmaPunk relative mb-[50px]">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
          Latest
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
          Tour Dates
        </h2>
      </div>
      <Tour />
    </div>
  );
};

export default TourPage;
