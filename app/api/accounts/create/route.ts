import { NextRequest } from "next/server";
import { createAccount } from "../../controllers/accountController";

export async function POST(req: NextRequest) {
  return await createAccount(req);
}
