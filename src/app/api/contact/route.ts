export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the form submission, e.g., send an email or save to a database.
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
}