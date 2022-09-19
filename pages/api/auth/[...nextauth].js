import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/connectDB";
import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";
import { verifyPassword } from "../../../lib/hashPassword";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectMongoose();
        console.log(req.body);
        const user = await User.findOne({ email: email });
        console.log(user);

        if (!user) {
          throw Error("No user found with this email");
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw Error("Invalid password, please try again!");
        }
        console.log("verify password:", isValid);

        return user;
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth",
  },
  secret: process.env.NEXT_JWT_SECRET,
});
