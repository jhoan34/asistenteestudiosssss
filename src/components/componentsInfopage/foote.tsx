import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" w-full min-h-[10vh]  bg-amber-400 grid grid-rows-2 grid-cols-3 place-items-center items-center px-4 py-6 gap-y-4">
      {/* Sección: Enlaces de navegación */}
      <div className="col-span-1 text-center sm:text-left">
        <h4 className="font-bold text-white text-md mb-2">
          Asistente de Estudios
        </h4>
        <ul className="space-y-1 text-white text-sm">
          <li>
            <Link href="#inicio" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#sobrenosotros" className="hover:underline">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="#servicios" className="hover:underline">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección: Redes sociales */}
      <div className="col-span-1 text-center">
        <h4 className="font-bold text-white text-md mb-2">Redes Sociales</h4>
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección: Contacto */}
      <div className="col-span-1 text-center sm:text-right">
        <h4 className="font-bold text-white text-md mb-2">Contacto</h4>
        <p className="text-white text-sm">asistentedestudios@gmail.com</p>
        <p className="text-white text-sm">311 264 4444</p>
      </div>

      {/* Derechos reservados */}
      <div className="row-span-1 col-span-3 mt-4">
        <p className="text-white text-xs text-center">
          © 2023 Asistente de Estudios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
