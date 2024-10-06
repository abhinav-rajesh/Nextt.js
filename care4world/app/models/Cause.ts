// models/Cause.ts
import mongoose, { Document, Model } from "mongoose";

interface ICause extends Document {
  name: string;
  description: string;
  goal: number;
  createdAt: Date;
}

const CauseSchema = new mongoose.Schema<ICause>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite upon initial compile
const Cause: Model<ICause> =
  mongoose.models.Cause || mongoose.model<ICause>("Cause", CauseSchema);

export default Cause;
