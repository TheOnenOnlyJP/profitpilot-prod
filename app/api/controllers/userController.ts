import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/models/User";
import { connectToDatabaseUsingMongoose } from "@/helpers/mongoose";
import { NextApiRequest } from "next";

export async function createUser(req: NextRequest) {
  try {
    const connected = await connectToDatabaseUsingMongoose();

    if (!connected) {
      return NextResponse.json({
        message: "Connection to database failed.",
        data: "error",
      });
    }

    const body = await req.json();
    const {
      email,
      password,
      fullName,
      phoneNumber,
      tradingExperience,
      preferredMarkets,
    } = body;

    const user = await User.create({
      email,
      password,
      fullName,
      phoneNumber,
      tradingExperience,
      preferredMarkets,
    });
    return NextResponse.json({
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "User creation failed.",
      data: error,
    });
  }
}

export async function findUser(req: NextRequest) {
  const connected = await connectToDatabaseUsingMongoose();

  if (!connected) {
    return NextResponse.json({
      message: "Connection to database failed.",
      data: "error",
    });
  }

  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await User.findOne({ email, password }).select("-password");

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
  } catch (error) {
    return NextResponse.json({
      message: "Error finding user.",
      data: error,
    });
  }
}
