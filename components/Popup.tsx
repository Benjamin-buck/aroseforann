"use client";
import { useEffect, useState } from "react";

const CouponPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenCouponPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("hasSeenCouponPopup", "true");
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // Clean up on unmount
    }
  }, []);

  const handleClose = () => setIsVisible(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    console.log("Collected email:", email);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white w-[200vw] p-6 rounded max-w-md  shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
        <h2 className="text-xl text-black font-bold mb-2">
          A Rose for Ann Fanclub
        </h2>
        <p className="mb-4 text-black">
          Sign up for the fanclub to receive exclusive offers, exclusive merch,
          and more.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="border p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-brand-orange font-semibold text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CouponPopup;
