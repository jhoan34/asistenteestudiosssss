import { z } from "zod";

export const routineRequestSchema = z.object({
  userId: z.string(),
  goal: z.string(),
  routineType: z.enum(["fitness", "study", "work", "mixed"]),
  preferences: z.array(z.string()).optional(),
  constraints: z.array(z.string()).optional(),
  daysPerWeek: z.number(),
  timePerDay: z.number(),
});
