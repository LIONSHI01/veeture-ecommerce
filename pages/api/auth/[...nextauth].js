import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongo } from "../../../lib/connectMongoose";
import User from "../../../models/userModel";
import Order from "../../../models/orderModel";
import { verifyPassword } from "../../../lib/hashPassword";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectMongo();

        const user = await User.findOne({ email: email }).select("+password");

        if (!user) {
          throw Error("No user found with this email");
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw Error("Invalid password, please try again!");
        }

        return user;
      },
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth",
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Fetch UserProfile from DB
      await connectMongo();

      const userProfile = await User.findOne({ email: token?.email }).populate({
        path: "orders",
        model: Order,
      });

      // Add User profile into session
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.profile = userProfile;

      return session;
    },
  },
};

export default NextAuth(authOptions);
