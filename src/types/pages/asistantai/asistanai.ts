import { z } from "zod";

export const routineRequestSchema = z.object({
  userId: z.string(),
  goal: z.string().min(1, "El objetivo es requerido"),
  routineType: z.enum(["fitness", "study", "work", "mixed"]),
  preferences: z.string().transform((val) =>
    val
      ? val
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : []
  ),
  constraints: z.string().transform((val) =>
    val
      ? val
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : []
  ),
  daysPerWeek: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().min(1).max(7)),
  timePerDay: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().min(1).max(24)),
});

// Tipos de entrada
export type RoutineRequest = {
  userId: string; // para identificar al usuario
  goal: string; // objetivo principal (ej. "mejorar productividad", "hacer ejercicio")
  routineType: "fitness" | "study" | "work" | "mixed"; // tipo de rutina
  preferences?: string[]; // cosas que le gustan o motivan (ej. ["mañanas", "bloques de 25 min"])
  constraints?: string[]; // limitaciones (ej. ["no tengo tiempo por las noches"])
  daysPerWeek: number; // cuántos días a la semana
  timePerDay: number; // cuántas horas al día
};

export type RoutineResponse = {
  summary: string;
  weeklyPlan: {
    day: string;
    activities: {
      time: string;
      activity: string;
      category: "work" | "study" | "exercise" | "leisure" | "other";
    }[];
  }[];
  tips: string[];
};

export const RoutineResponseSchema = z.object({
  summary: z.string(),
  weeklyPlan: z.array(
    z.object({
      day: z.string(),
      activities: z.array(
        z.object({
          time: z.string(),
          activity: z.string(),
          category: z.enum(["work", "study", "exercise", "leisure", "other"]),
        })
      ),
    })
  ),
  tips: z.array(z.string()),
});

export type RoutineState = {
  status: "success" | "error";
  message: string;
  data?: string;
  errors?: z.inferFlattenedErrors<typeof routineRequestSchema>;
} | null;

export interface ResponseData {
  userId: string;
  goal: string;
  routineType: "fitness" | "study" | "work" | "mixed";
  preferences?: string[];
  constraints?: string[];
  daysPerWeek: number;
  timePerDay: number;
}

export interface RoutineActivity {
  time: string;
  activity: string;
  category: "work" | "study" | "exercise" | "leisure" | "other";
}

export interface RoutineDay {
  day: string;
  activities: RoutineActivity[];
}
