"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moddletoggle } from "../mode";
import { routes } from "@/utils/routes";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();

  return (
    <>
      {/* Botón hamburguesa */}
      <Button
        onClick={() => setOpen(!open)}
        className="m-4 fixed top-4 left-4 z-10 p-2 bg-blue-500 hover:bg-blue-600 text-white"
      >
        <Menu />
      </Button>

      {/* Menú lateral */}
      <aside
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-0 w-[250px] h-screen bg-blue-200 shadow-lg transition-all duration-300 z-40`}
      >
        <Button
          onClick={() => setOpen(!open)}
          className="hover:bg-blue-500 absolute w-6 h-6 top-5 right-5 bg-black p-2"
        >
          <X className="text-white w-4 h-4" />
        </Button>
        <header className="mt-14 p-6 flex flex-col gap-6 h-full justify-between">
          <div>
            <Link
              href="/"
              className="text-3xl font-bold text-blue-800 hover:underline"
            >
              AsistStudysAi
            </Link>

            <ul className="mt-8 flex flex-col gap-3">
              {routes?.map((ele, i) => {
                const isActive = path === ele.href;
                return (
                  <li key={i}>
                    <Link href={`${ele.href}`}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left px-4 py-2 rounded-lg text-lg ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "hover:bg-blue-200 text-blue-800"
                        }`}
                      >
                        {ele.title}
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Moddletoggle />
          </div>
        </header>
      </aside>
    </>
  );
}
