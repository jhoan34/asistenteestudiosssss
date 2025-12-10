"use server";

import { routineRequestSchema } from "@/lib/zod/asistanaiZod";
import { chatAsist } from "./chatasist";
import { ResponseData, RoutineState } from "@/types/pages/asistantai/asistanai";
export async function processAndChat(
  prevState: RoutineState,
  formData: FormData
): Promise<RoutineState> {
  // 1. Validación de entrada
  const raw = {
    userId: formData.get("userId"),
    goal: formData.get("goal"),
    routineType: formData.get("routineType"),
    preferences:
      (formData.get("preferences") as string)
        ?.split(",")
        .map((s) => s.trim()) ?? [],
    constraints:
      (formData.get("constraints") as string)
        ?.split(",")
        .map((s) => s.trim()) ?? [],
    daysPerWeek: Number(formData.get("daysPerWeek")),
    timePerDay: Number(formData.get("timePerDay")),
  };

  const rawFormData = routineRequestSchema.safeParse(raw);

  console.log(rawFormData);
  if (!rawFormData.success) {
    return {
      status: "error",
      message: "Error en la validación de los datos",
      errors: rawFormData.error.flatten(),
    };
  }

  const rawFormDataValidated: ResponseData = rawFormData.data;

  // 2. Llamada al asistente (devuelve string JSON)
  const dataApiString = await chatAsist(rawFormDataValidated);
  console.log(dataApiString);
  // 3. Parseamos y validamos con Zod
  const json = JSON.parse(JSON.stringify(dataApiString)); // 👉 convert to object

  // 4. Respuesta final
  return {
    status: "success",
    message: "Rutina generada con éxito",
    data: JSON.stringify(json),
  };
}
