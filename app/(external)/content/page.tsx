import { content } from "@/constants/content";
import React from "react";
import ContentItem from "./ContentItem";

const ContentPage = () => {
  return (
    <div className="mx-auto container my-8">
      <div>
        <h2>Content</h2>
        <p>
          Check out the latest content across social media platforms by A Rose
          For Ann.
        </p>
      </div>
      <div className="grid gap-3 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 my-3">
        {content.map((item) => (
          <ContentItem key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
