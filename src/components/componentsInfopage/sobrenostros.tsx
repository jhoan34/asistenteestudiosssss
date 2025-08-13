import Image from "next/image";

export function SobreNosotros() {
  return (
    <section
      id="sobreNosotross"
      className="w-full border-t-2 border-b-2 border-amber-400 min-h-screen flex flex-row items-center justify-center px-8 py-16 gap-12"
    >
      <div className="w-[40%] max-w-md aspect-[3/4] overflow-hidden shadow-2xl">
        <Image
          src="/estudios.jpg"
          alt="Persona estudiando"
          width={500}
          height={700}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-[50%] max-w-2xl flex flex-col justify-center gap-12">
        <h1 className="text-5xl font-bold font-serif tracking-wide text-amber-400 text-center underline decoration-2 underline-offset-8">
          Sobre Nosotros
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 text-justify">
          Somos un equipo de profesionales apasionados por la educación y la
          tecnología. Nuestro objetivo es brindar soluciones creativas e
          innovadoras para transformar tus ideas en realidad académica.
          <br />
          <br />
          Nuestro equipo está compuesto por expertos con experiencia en diversas
          áreas, como la educación, la tecnología y la innovación, comprometidos
          con tu éxito.
        </p>
      </div>
    </section>
  );
}
