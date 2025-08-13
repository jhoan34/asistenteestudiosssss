// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    console.log(req.url);
    const token = req.nextauth?.token;

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Solo deja pasar si está autenticado
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    // Puedes agregar más rutas protegidas aquí
  ],
};
