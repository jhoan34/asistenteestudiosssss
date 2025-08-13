import { Contacto } from "@/components/componentsInfopage/contacto";
import { Footer } from "@/components/componentsInfopage/foote";
import { HeaderPageInfo } from "@/components/componentsInfopage/header";
import { Servicios } from "@/components/componentsInfopage/servicios";
import { SobreNosotros } from "@/components/componentsInfopage/sobrenostros";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#050d1e] via-[#070a12] to-[#000101]">
      <HeaderPageInfo />
      <main id="inicio" className="relative w-full min-h-screen">
        <div
          id="inicio"
          className="w-full h-[90vh] relative flex items-center justify-center px-12"
        >
          {/* Imagen desenfocada al fondo */}
          <Image
            src="/estudios.jpg"
            alt="Persona estudiando"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
          />

          {/* Contenido en primer plano */}
          <div className="relative z-10 w-full max-w-6xl flex flex-row items-center justify-between">
            {/* Texto */}
            <div className="w-1/2 flex flex-col gap-6">
              <h1 className="text-5xl font-semibold text-white leading-tight">
                Brindamos soluciones creativas
                <br />
                para transformar tus ideas en realidad académica.
              </h1>
              <p className="text-lg text-gray-300">
                Soporte personalizado para tus estudios con enfoque digital e
                innovador.
              </p>
              <Button
                variant="destructive"
                className="w-max bg-amber-500 hover:bg-amber-300"
              >
                <Link href="/auth/register" className="w-full h-full">
                  Regístrate y usa nuestro servicio
                </Link>
              </Button>
            </div>

            {/* Imagen en foreground */}
            <div className="w-[40%] h-[78vh] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/estudios.jpg"
                alt="Persona estudiando"
                width={500}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <SobreNosotros />
        <Servicios />
        <Contacto />
      </main>

      <Footer />
    </section>
  );
}
