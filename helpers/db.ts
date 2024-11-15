import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function connectToDatabase(): Promise<MongoClient | undefined> {
  configDotenv();
  const connectionString = `mongodb+srv://aneeshbhatcs009:${process.env.PASSWORD}@profitpilot.eqows.mongodb.net/?retryWrites=true&w=majority&appName=ProfitPilot`;

  try {
    const client = new MongoClient(connectionString, {});
    console.log(`Connected to MongoDB.`);
    return client;
  } catch (error: any) {
    console.error(`Connection Failed.`, error);
    return undefined;
  }
}
