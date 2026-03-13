import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // 1. Honeypot Validation (Server-side)
    if (_gotcha) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    // 2. Basic Server Validation
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // 3. Simulate Email Service Integration (e.g., SendGrid, Resend)
    // In a real app, you would do:
    // await resend.emails.send({ ... })
    
    console.log("--- New Lead Received ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);

    // Artificial delay to simulate real API processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}