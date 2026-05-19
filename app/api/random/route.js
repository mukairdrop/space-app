export async function GET() {
return Response.json({
success: true,
random: Math.random()
});
}
