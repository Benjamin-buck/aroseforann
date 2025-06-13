/* eslint-disable @next/next/no-img-element */
// app/(external)/blog/[slug]/page.tsx

import { TourPost } from "@/lib/types";
import Link from "next/link";

const TourPage = async () => {
  const getTourDates = async () => {
    const res = await fetch(
      "https://headlesscms.aroseforann.com/wp-json/wp/v2/tour?orderby=date&order=asc",
      { cache: "no-store" }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch tour data:", errorText);
      throw new Error("Could not fetch tour dates");
    }

    const data = await res.json();

    // Sort by _tour_date field (ascending)
    const sortedTours = data.sort(
      (
        a: { meta: { _tour_date: string | number | Date } },
        b: { meta: { _tour_date: string | number | Date } }
      ) => {
        const dateA = new Date(a.meta?._tour_date);
        const dateB = new Date(b.meta?._tour_date);
        return dateA.getTime() - dateB.getTime();
      }
    );

    return sortedTours;
  };

  const tourDates = await getTourDates();

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
        {tourDates.map((tour: TourPost) => (
          <div
            className="border border-gray-700 rounded-lg flex w-[100%] justify-between p-3"
            key={tour.id}
          >
            <div className="flex lg:items-center gap-2 flex-col lg:flex-row lg:gap-[150px] w-full text-xl font-semibold">
              <p className=" w-[140px]">{tour.meta._tour_date}</p>
              <p className="min-w-[200px] ">{tour.meta._tour_city}</p>
              <p>{tour.meta._tour_venue}</p>
            </div>
            <div className="flex gap-3 items-center">
              {tour.meta._tour_rsvp_url && (
                <Link
                  href={tour.meta._tour_rsvp_url}
                  className="bg-brand-orange p-2 text-white font-semibold rounded hover:bg-orange-800"
                >
                  RSVP
                </Link>
              )}
              {tour.meta._tour_tickets_url && (
                <Link
                  href={tour.meta._tour_tickets_url}
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
    </div>
  );
};

export default TourPage;
