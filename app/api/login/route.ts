import { connectToDatabase } from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const client = await connectToDatabase();

  if (!client) {
    return NextResponse.json({
      message: "Connection to database failed.",
      data: "error",
    });
  }

  const body = await new Response(req.body).json();
  const db = client.db("ProfitPilot");
  const { email, password } = body;
  const user = await db.collection("users").findOne({
    email,
    password,
  });

  if (!user) {
    return NextResponse.json({
      message: "User not found.",
      data: "error",
    });
  }

  return NextResponse.json({
    message: "User found.",
    data: user,
  });
}
