import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface User {
  _id?: ObjectId;
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  tradingExperience: string;
  preferredMarkets: string[];
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  tradingExperience: { type: String, required: true },
  preferredMarkets: { type: [String], required: true },
});

export default models.User || model<User>("User", UserSchema);
