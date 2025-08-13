"use client";
import { useCreatePlanesEstudio } from "@/lib/funcionesDb/funcionesdb";
import { Doc } from "../../convex/_generated/dataModel";

const MiComponente = () => {
  const createEstudio = useCreatePlanesEstudio();

  const handleClick = async () => {
    const nuevoEstudio = {
      userId: "k97fj2166gwp236mx4x6zpja1h7m84kd",
      lunes: "Ingeniería",
      martes: "Plan 2025",
      miercoles: "Plan 2025",
      jueves: "Plan 2025",
      viernes: "Plan 2025",
      sabado: "Plan 2025",
      domingo: "Plan 2025",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
      // otros campos...
    };

    try {
      const id = await createEstudio(nuevoEstudio as Doc<"planestudios">);
      console.log("Estudio creado con ID:", id);
    } catch (error) {
      console.error("Error al crear el estudio:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Crear estudio</button>
    </div>
  );
};

export default MiComponente;
