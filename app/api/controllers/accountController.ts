import { NextRequest, NextResponse } from "next/server";
import { connectToDatabaseUsingMongoose } from "@/helpers/mongoose";
import Account from "@/app/api/models/Account";
import { configDotenv } from "dotenv";

const MetaApi = require("metaapi.cloud-sdk").default;

export async function createAccount(req: NextRequest) {
  try {
    await connectToDatabaseUsingMongoose();

    const body = await req.json();
    const {
      platform,
      metaTraderServer,
      accountName,
      metaTraderLogin,
      password,
      region,
      enableCopyFactory,
      copyFactoryRole,
      enableRiskManagement,
      enableMetaStats,
      userId,
    } = body;

    const account = await Account.create({
      platform,
      metaTraderServer,
      accountName,
      metaTraderLogin,
      password,
      region,
      enableCopyFactory,
      copyFactoryRole,
      enableRiskManagement,
      enableMetaStats,
      userId,
    });

    return NextResponse.json({
      message: "Account created successfully.",
      data: account,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Account creation failed.",
      data: error,
    });
  }
}

export async function connectToAccount(req: NextRequest) {
  try {
    configDotenv();
    const token = process.env.TOKEN || "";
    const api = new MetaApi(token);

    await connectToDatabaseUsingMongoose();
    const urlParts = req.url.split("/");
    const userId = urlParts[urlParts.length - 1];

    const account = await Account.findOne({ userId });
    console.log(account);
    const metaAccounts =
      await api.metatraderAccountApi.getAccountsWithInfiniteScrollPagination();
    let metaAccount = metaAccounts.find((a: any) => {
      return a.login === account.metaTraderLogin && a.type.startsWith("cloud");
    });

    console.log(metaAccount);
    if (!metaAccount) {
      console.log("Adding MT5 account to MetaApi");
      metaAccount = await api.metatraderAccountApi.createAccount({
        name: account.accountName,
        type: "cloud",
        login: account.metaTraderLogin,
        password: account.password,
        server: account.metaTraderServer,
        platform: account.platform,
        magic: 1000,
      });
    } else {
      console.log("MT5 account already added to MetaApi");
    }
    return NextResponse.json({
      message: "Connected to account successfully.",
      //   data: JSON.parse(stringify(metaAccount)),
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      message: "Account connection failed.",
      data: error,
    });
  }
}
