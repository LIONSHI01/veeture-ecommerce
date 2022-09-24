import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/connectDB";
import connectMongoose from "../../../lib/connectMongo";
import User from "../../../models/userModel";
import { verifyPassword } from "../../../lib/hashPassword";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
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
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth",
  },
  secret: process.env.NEXT_JWT_SECRET,

  // From Reference [TEST]
  // callbacks: {
  //   async jwt({ token, user }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (user) {
  //       token.accessToken = user.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
