import { NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().optional(),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation
    const validatedData = contactSchema.parse(body);

    // Honeypot check
    if (validatedData._gotcha) {
      // Silently succeed to fool bots, but don't send email
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // In a real environment, you would send an email here using Nodemailer, SendGrid, or Resend
    // Example: await sendEmail(validatedData);
    
    console.log("Form received:", validatedData);

    // Simulate network delay for better UX (loading state)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}