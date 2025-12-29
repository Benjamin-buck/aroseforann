import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, firstName, lastName } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = process.env.MAILCHIMP_DATACENTER!;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: data.detail || "Subscription failed" },
      { status: response.status }
    );
  }

  return NextResponse.json({ success: true });
}
