// pages/api/register-cause.ts
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Cause from "../../models/Cause";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGO_URI as string);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { name, description, goal } = req.body;

    if (!name || !description || !goal || typeof goal !== "number") {
      return res.status(400).json({ error: "Invalid input data." });
    }

    const newCause = new Cause({ name, description, goal });
    await newCause.save();

    res.status(201).json({ message: "Cause registered successfully!" });
  } catch (error: unknown) {
    console.error("Error registering cause:", error);
    
    // Check if error is an instance of Error to safely access the message
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
