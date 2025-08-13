import { ConvexClientProvider } from "@/components/convexClientProvider";
import "./globals.css";
import type { Metadata } from "next";
import SessionProviderComponent from "@/components/sessionProvider";
import { ThemeProvider } from "@/components/theme_provide";

export const metadata: Metadata = {
  title: "Tu App",
  description: "Descripción de la app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProviderComponent>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </SessionProviderComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
