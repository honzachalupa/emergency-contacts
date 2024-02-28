import data from "@/context/data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const apiKey = url.searchParams.get("apiKey");

  if (apiKey === process.env.API_KEY) {
    return Response.json(data);
  }

  return new Response(null, {
    status: 401,
  });
}
