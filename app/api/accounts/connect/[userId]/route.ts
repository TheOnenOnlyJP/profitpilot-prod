import { connectToAccount } from "@/app/api/controllers/accountController";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return await connectToAccount(req);

  // const { searchParams } = new URL(req.url);
  // const userId = searchParams.get("userId");
  // console.log(userId);
  // if (req.method === "GET") {
  //   // Handle GET request
  //   res
  //     .status(200)
  //     .json({ message: `Connected to account with userId: ${userId}` });
  // } else {
  //   res.status(405).json({ message: "Method not allowed" });
  // }
}
