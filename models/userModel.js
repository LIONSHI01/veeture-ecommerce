import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required for User."],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "Email is required for User."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Password is required for User."],
      trim: true,
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
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
