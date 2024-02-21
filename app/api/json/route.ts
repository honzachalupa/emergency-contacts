import data from "@/context/data";

export async function GET() {
  return Response.json(data);
}
