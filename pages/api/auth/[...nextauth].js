import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "../../../prisma/client";

export const authOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, user }) {
      session.userId = user.id;
      session.role = user.role;
      return Promise.resolve(session);
    },
  },
}

export default NextAuth(authOptions)