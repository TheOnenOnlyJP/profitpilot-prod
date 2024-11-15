import { createUser } from "../../controllers/userController";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await createUser(req);
}