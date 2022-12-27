import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../lib/connectDB";
// import connectMongoose from "../../../lib/connectMongo";
import { connectMongo } from "../../../lib/connectMongoose";
import User from "../../../models/userModel";
import { verifyPassword } from "../../../lib/hashPassword";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectMongo();

        const user = await User.findOne({ email: email });

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
};

export default NextAuth(authOptions);
