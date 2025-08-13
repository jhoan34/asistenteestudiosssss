"use client";

import Link from "next/link";
import Image from "next/image";

const sectiones = [
  { name: "Inicio", path: "#inicio" },
  { name: "Sobre Nosotros", path: "#sobreNosotros" },
  { name: "Servicios", path: "#servicios" },
  { name: "Contacto", path: "#contacto" },
];

export function HeaderPageInfo() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full h-[14vh] font-serif text-white flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="flex-shrink-0 w-16 h-12">
        <Link href="/" className="block w-full h-full">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-base md:text-lg">
        {sectiones.map((section) => (
          <Link
            key={section.name}
            href={section.path}
            className="border-b-2 border-transparent hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 pb-1"
          >
            {section.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
