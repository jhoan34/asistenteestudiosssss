import { Book, Bot, ClipboardPen, Clock } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicios: Props[] = [
  {
    title: "AI Personalizdo",
    description:
      "Asistente de ia personalizado para tu estudio y una plan de estudios",
    icon: <Bot />,
  },
  {
    title: "Temporizadores",
    description:
      "Temporizadores de diferentes tipos para mejorar tu productividad y organización",
    icon: <Clock />,
  },
  {
    title: "AI para explicar y tecnicas para mejorar la memoria",
    description:
      "Asistente de ia para explicar conceptos complejos, tenemos flashcards o test para que mejores tu memoria y comprension de conceptos",

    icon: <Book />,
  },
  {
    title: "Ai resumenes",
    description: "Asistente de ia para resumir textos",
    icon: <ClipboardPen />,
  },
];

const Servicio = ({ title, description, icon }: Props) => {
  return (
    <div className="hover:scale-110 transition-all transition-duration-300 w-[30%] h-[80%] p-8 bg-white rounded-2xl flex flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-bold font-serif tracking-wide text-black text-center">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-black text-justify">
        {description}
      </p>
      <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export function Servicios() {
  return (
    <section
      id="servicios"
      className="w-full border-t-2 border-b-2 border-amber-400 flex flex-col justify-center items-center h-[100vh] "
    >
      <h1 className="text-amber-400 text-5xl font-bold font-serif tracking-wide text-center">
        Servicios
      </h1>

      <div className="w-[85%] h-[80%] flex flex-row items-center justify-center gap-12">
        {servicios.map((servicio) => (
          <Servicio
            key={servicio.title}
            title={servicio.title}
            description={servicio.description}
            icon={servicio.icon}
          />
        ))}
      </div>
    </section>
  );
}
