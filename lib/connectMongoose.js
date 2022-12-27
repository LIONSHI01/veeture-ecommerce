import mongoose from "mongoose";

// CURRENTLY BEING USED
const DB = process.env.NEXT_PUBLIC_DATABASE.replace(
  "<PASSWORD>",
  process.env.NEXT_PUBLIC_DATABASE_PASSWORD
);

export const connectMongo = async () => mongoose.connect(DB);
