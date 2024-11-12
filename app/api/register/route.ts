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
  const { name, email, password } = body;
  const user = await db.collection("users").insertOne({
    name,
    email,
    password,
  });

  return NextResponse.json({
    message: "User created successfully.",
    data: user,
  });
}
