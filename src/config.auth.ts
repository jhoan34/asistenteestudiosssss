// src/auth/config.ts

import CredentialsProvider from "next-auth/providers/credentials";
//import GoogleProvider from "next-auth/providers/google";
import { api } from "../convex/_generated/api";
import bcrypt from "bcrypt";
import { fetchQuery } from "convex/nextjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log(credentials, "estamos en authorize");
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email or password is required");
          }

          const { email, password } = credentials;

          const user = await fetchQuery(api.functions.user.crud.getuser, {
            email,
          });

          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Password is incorrect");
          }

          return {
            id: user._id,
            email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
    /*
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    */
  ],
};

export default authOptions;
