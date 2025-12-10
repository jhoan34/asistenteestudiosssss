"use server";
import OpenAI from "openai";

import { ResponseData } from "@/types/pages/asistantai/asistanai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export const chatAsist = async (formData: ResponseData): Promise<string> => {
  try {
    const systemMessage =
      "Eres un asistente virtual que ayuda a los usuarios a crear rutinas de ejercicio y estudio. El usuario te proporcionará información sobre su objetivo, tipo de rutina, preferencias y limitaciones. Tu tarea es crear una rutina personalizada que se adapte a sus necesidades y metas. Siempre responde en formato JSON con {summary, weeklyPlan[], tips[]}.";

    const userMessage =
      `Objetivo: ${formData.goal}\n` +
      `Tipo de rutina: ${formData.routineType}\n` +
      `Preferencias: ${formData.preferences?.join(", ") || "Ninguna"}\n` +
      `Limitaciones: ${formData.constraints?.join(", ") || "Ninguna"}\n` +
      `Días por semana: ${formData.daysPerWeek}\n` +
      `Horas por día: ${formData.timePerDay}`;

    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
      response_format: { type: "json_object" }, // 👈 aquí solo esto
    });

    const routine = response.choices[0].message.content;

    if (!routine) {
      throw new Error("No se pudo generar la rutina");
    }

    // 👇 lo parseamos a nuestro tipo
    return JSON.parse(routine);
  } catch (error) {
    console.error("Error en chatAsist:", error);
    throw error;
  }
};
