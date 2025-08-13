"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { handleSignOut } from "@/app/actions/signIn";

export function UserCard() {
  const { data: session } = useSession();
  const user = session?.user;

  const Logout = async () => {
    await handleSignOut();
  };
  const colores = ["bg-purple-600", "bg-red-600", "bg-yellow-600"];
  return (
    <Popover>
      <PopoverTrigger asChild className="absolute top-6 right-6">
        <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
          <div
            className={`flex items-center justify-center ${colores[Math.floor(Math.random() * colores.length)]} h-10 w-12 rounded-full overflow-hidden `}
          >
            {user?.name?.split(" ")[0].slice(0, 2)?.toUpperCase()}
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="bottom"
        className="w-80 p-4 border border-black  rounded-xl shadow-xl dark:bg-zinc-900 bg-white  dark:border-zinc-800"
      >
        <div className="flex flex-col items-center text-center gap-2">
          {user?.image && (
            <Image
              src={user.image}
              alt="Avatar"
              width={64}
              height={64}
              className="w-20 h-20 object-cover rounded-full border dark:border-zinc-800"
            />
          )}
          <p className="text-sm text-muted-foreground">{user?.email}</p>
          <h2 className="text-lg font-semibold">
            ¡Hola, {user?.name?.split(" ")[0]}!
          </h2>
          <Button variant="outline" className="w-full mt-2 text-sm">
            Administrar tu cuenta
          </Button>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Button
            variant="ghost"
            className="justify-start w-full text-sm gap-2"
          >
            <Settings size={16} />
            Configuración
          </Button>
          <Button
            variant="destructive"
            className="justify-start w-full text-sm gap-2"
            onClick={Logout}
          >
            <LogOut size={16} />
            Cerrar sesión
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
