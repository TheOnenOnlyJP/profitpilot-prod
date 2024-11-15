import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface Account {
  _id?: ObjectId;
  platform: string;
  metaTraderServer: string;
  accountName: string;
  metaTraderLogin: string;
  password: string;
  region: string;
  enableCopyFactory: boolean;
  copyFactoryRole: string;
  enableRiskManagement: boolean;
  enableMetaStats: boolean;
  userId: ObjectId;
}

const AccountSchema = new Schema<Account>({
  platform: { type: String, required: true },
  metaTraderServer: { type: String, required: true },
  accountName: { type: String, required: true },
  metaTraderLogin: { type: String, required: true },
  password: { type: String, required: true },
  region: { type: String, required: true },
  enableCopyFactory: { type: Boolean, required: true },
  copyFactoryRole: { type: String, required: true },
  enableRiskManagement: { type: Boolean, required: true },
  enableMetaStats: { type: Boolean, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export default models.Account || model<Account>("Account", AccountSchema);
