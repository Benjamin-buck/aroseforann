"use client";

import { useState } from "react";

export default function MailchimpSubscribe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      setMessage(data.error || "Something went wrong");
      return;
    }

    setStatus("success");
    setMessage("You're subscribed! 🎉");
    setEmail("");
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={handleSubmit} className=" space-y-3 text-black">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="email"
        placeholder="Email address"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-black text-white py-2 rounded border hover:bg-gray-600"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
