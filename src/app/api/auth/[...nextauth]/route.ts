import NextAuth from "next-auth/next";
import authConfig from "@/config.auth";

const handler = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login", // Tu página de login personalizada
    error: "/error", // Ya la tienes
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? "";
        session.user.email = token.email ?? "";
        session.user.name = token.name ?? "";
        session.user.image = (token.image as string) ?? "";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
