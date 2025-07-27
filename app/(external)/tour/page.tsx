/* eslint-disable @next/next/no-img-element */
// app/(external)/blog/[slug]/page.tsx

import Link from "next/link";
import { pastTourDates, tourDates } from "@/constants/tour";

const TourPage = async () => {
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
      <div className="flex flex-col gap-3 lg:mt-0 mt-[60px] max-md:mx-8">
        {tourDates.map((tour) => (
          <div
            className="border border-gray-700 rounded-lg flex w-[100%] justify-between p-3"
            key={tour.date}
          >
            <div className="flex lg:items-center gap-2 flex-col lg:flex-row lg:gap-[150px] w-full text-xl font-semibold">
              <p className=" w-[140px]">{tour.date}</p>
              <p className="min-w-[200px] ">{tour.city}</p>
              <p>{tour.venue}</p>
            </div>
            <div className="flex gap-3 items-center">
              {tour.RSVP && (
                <Link
                  href={tour.RSVP}
                  className="bg-brand-orange p-2 text-white font-semibold rounded hover:bg-orange-800"
                >
                  RSVP
                </Link>
              )}
              {tour.tickets && (
                <Link
                  href={tour.tickets}
                  className="bg-brand-orange p-2 text-white font-semibold rounded hover:bg-orange-800"
                >
                  Tickets
                </Link>
              )}
            </div>

            <div className="">{}</div>
          </div>
        ))}
      </div>

      <div className="font-DharmaPunk relative mb-[50px] mt-[100px]">
        <h3 className="text-[50px] font-DharmaPunk text-brand-orange max-md:px-10">
          Past
        </h3>
        <h2 className="text-[70px] font-DharmaPunk absolute top-8 max-md:left-10">
          Tour Dates
        </h2>
      </div>
      <div className="flex flex-col gap-3 lg:mt-0 mt-[60px] max-md:mx-8">
        {pastTourDates.map((tour) => (
          <div
            className="border border-gray-700 rounded-lg flex w-[100%] justify-between p-3"
            key={tour.date}
          >
            <div className="flex lg:items-center gap-2 flex-col lg:flex-row lg:gap-[150px] w-full text-xl font-semibold">
              <p className=" w-[140px]">{tour.date}</p>
              <p className="min-w-[200px] ">{tour.city}</p>
              <p>{tour.venue}</p>
            </div>

            <div className="">{}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPage;
