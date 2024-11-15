import { NextRequest } from "next/server";
import { findUser } from "../../controllers/userController";

export async function POST(req: NextRequest) {
  return await findUser(req);
}
