import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export async function connectToDatabaseUsingMongoose() {
  configDotenv();

  const connectionString: string = `mongodb+srv://aneeshbhatcs009:${process.env.PASSWORD}@profitpilot.eqows.mongodb.net/?retryWrites=true&w=majority&appName=ProfitPilot`;
  try {
    await mongoose.connect(connectionString, {});
    console.log(`Connected to MongoDB.`);
    return true;
  } catch (error) {
    console.error(`Connection Failed.`, error);
    return false;
  }
}
