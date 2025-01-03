import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tourDates } from "@/constants/data";
import Link from "next/link";

const Tour = () => {
  return (
    <div id="tour" className="mb-[400px]">
      <h2 className="text-5xl font-semibold text-center">Tour Dates</h2>
      <Table className="container mx-auto my-8">
        {/* <TableCaption className="text-lg">
          There are currently no shows scheduled. Please check back later.
        </TableCaption> */}
        <TableHeader>
          <TableRow className="text-lg hover:bg-transparent">
            <TableHead className="w-[200px] max-md:w-auto text-brand-red font-semibold">
              Date
            </TableHead>
            <TableHead className="text-brand-red font-semibold">City</TableHead>
            <TableHead className="text-brand-red font-semibold max-lg:hidden">
              Venue
            </TableHead>
            <TableHead className="text-right text-brand-red font-semibold">
              Tickets
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tourDates.map(({ city, venue, date, tickets, rsvp }) => (
            <TableRow className="hover:bg-transparent" key={date}>
              <TableCell className="text-lg">{date}</TableCell>
              <TableCell className="text-lg">{city}</TableCell>
              <TableCell className="text-lg max-lg:hidden">{venue}</TableCell>
              <TableCell className="text-right text-lg space-x-3">
                {tickets ? (
                  <Link href={tickets}>
                    <button className="bg-brand-red hover:bg-gray-800 transition-all duration-200 px-4 py-1 rounded-md font-semibold">
                      Tickets
                    </button>
                  </Link>
                ) : (
                  <p>Coming Soon</p>
                )}
                {rsvp && (
                  <Link href={rsvp} className="max-md:hidden">
                    <button className="bg-gray-600 hover:bg-gray-800 transition-all duration-200 px-4 py-1 rounded-md font-semibold ">
                      RSVP
                    </button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tour;
