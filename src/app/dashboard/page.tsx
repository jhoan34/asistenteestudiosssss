"use client";

import { Header } from "@/components/compDash/header";
import { UserCard } from "@/components/compDash/session";

export default function Dashboard() {
  return (
    <section className="min-h-screen w-full  bg-white dark:bg-black px-4 py-10 text-black dark:text-white transition-colors">
      <div className="flex flex-col items-center justify-center gap-6">
        <UserCard />
        <Header />
      </div>
    </section>
  );
}
