"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}

const Back = ({ className }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={cn(
        "text-white font-semibold bg-brand-orange p-3 rounded-lg hover:bg-orange-800",
        className
      )}
    >
      Back
    </button>
  );
};

export default Back;
