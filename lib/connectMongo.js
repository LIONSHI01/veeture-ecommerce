import mongoose from "mongoose";

const connectMongoose = () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  mongoose.connect(process.env.NEXT_PUBLIC_NEXT_MONGODB_URI, {}, (err) => {
    if (err) throw err;
  });
};

export default connectMongoose;
