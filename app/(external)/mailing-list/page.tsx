import MailchimpSubscribe from "@/components/MailchimpSubscribe";
import React from "react";

const MailingList = () => {
  return (
    <div className="mx-auto container flex w-full justify-center my-10 flex-col items-center">
      <div className="mb-10 text-center">
        <h2>Join Our Mailing List</h2>
        <p>
          Be the first to hear about up-coming shows, updates, and everything
          else A Rose for Ann.
        </p>
      </div>

      <MailchimpSubscribe />
    </div>
  );
};

export default MailingList;
