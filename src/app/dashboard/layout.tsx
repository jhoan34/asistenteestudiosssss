export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Dashboard",
};
