"use client";

import AsistenteIaRoutine from "@/components/compDash/components_main_page/asistente_ia_routine";
import { TablaRoutine } from "@/components/compDash/components_main_page/tabla_routine";
import { Header } from "@/components/compDash/header";
import { UserCard } from "@/components/compDash/session";

export default function Dashboard() {
  return (
    <section className="relative min-h-screen w-full  bg-white dark:bg-black px-4 py-10 text-black dark:text-white transition-colors">
      <Header />
      <UserCard />

      <div className="relative p-4 mt-[10vh] bg-red-400 w-full h-[85vh] flex flex-row items-center justify-between gap-6">
        <AsistenteIaRoutine />
        <TablaRoutine />
      </div>
    </section>
  );
}
