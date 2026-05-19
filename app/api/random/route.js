export async function GET() {
  const random = Math.random().toString(36);

  return Response.json({
    random
  });
}
