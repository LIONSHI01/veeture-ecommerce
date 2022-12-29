import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required for User."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required for User."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required for User."],
      trim: true,
      select: false,
    },
    image: {
      type: String,
    },
    address: [
      {
        streetAddress: String,
        streetAddress2: String,
        city: String,
        state: String,
        postal: String,
      },
    ],
    wishlist: [{}],
    cartList: [{}],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Populate user orders on Order Schema
userSchema.virtual("orders", {
  ref: "Order",
  foreignField: "user",
  localField: "_id",
});

const User = models.User || model("User", userSchema);
export default User;
