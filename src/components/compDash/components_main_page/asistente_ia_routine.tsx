"use client";

import { z } from "zod";
import React from "react";
import { useActionState } from "react";
import { processAndChat } from "@/app/actions/processChatasist";
import { RoutineState } from "@/types/pages/asistantai/asistanai";
import { routineRequestSchema } from "@/lib/zod/asistanaiZod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AsistenteIARoutine: React.FC = () => {
  // Hook de server action
  const [state, formAction, isPending] = useActionState<RoutineState, FormData>(
    processAndChat,
    null
  );

  // Hook del form con Zod
  const form = useForm<z.infer<typeof routineRequestSchema>>({
    resolver: zodResolver(routineRequestSchema),
    defaultValues: {
      userId: "u123",
      goal: "",
      routineType: "work",
      preferences: [],
      constraints: [],
      daysPerWeek: 5,
      timePerDay: 6,
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* FORM */}
      <form
        action={formAction}
        className="bg-white p-4 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-xl font-bold">Crear rutina semanal</h2>

        <input type="hidden" {...register("userId")} value="u123" />

        <input
          type="text"
          placeholder="Objetivo (ej. mejorar productividad)"
          className="w-full p-2 border rounded"
          {...register("goal")}
        />
        {errors.goal && (
          <p className="text-red-500 text-sm">{errors.goal.message}</p>
        )}

        <select
          {...register("routineType")}
          className="w-full p-2 border rounded"
        >
          <option value="fitness">Fitness</option>
          <option value="study">Estudio</option>
          <option value="work">Trabajo</option>
          <option value="mixed">Mixto</option>
        </select>

        <input
          type="text"
          placeholder="Preferencias (separadas por comas)"
          className="w-full p-2 border rounded"
          {...register("preferences")}
        />

        <input
          type="text"
          placeholder="Limitaciones (separadas por comas)"
          className="w-full p-2 border rounded"
          {...register("constraints")}
        />

        <input
          type="number"
          placeholder="Días por semana"
          className="w-full p-2 border rounded"
          {...register("daysPerWeek", { valueAsNumber: true })}
        />
        {errors.daysPerWeek && (
          <p className="text-red-500 text-sm">{errors.daysPerWeek.message}</p>
        )}

        <input
          type="number"
          placeholder="Horas por día"
          className="w-full p-2 border rounded"
          {...register("timePerDay", { valueAsNumber: true })}
        />
        {errors.timePerDay && (
          <p className="text-red-500 text-sm">{errors.timePerDay.message}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Generando..." : "Generar rutina"}
        </button>

        {/* Errores del server action */}
        {state?.status === "error" && state.errors && (
          <div className="text-red-500">
            {Object.entries(state.errors.fieldErrors).map(([field, msgs]) =>
              msgs?.map((msg, idx) => (
                <p key={field + idx}>
                  {field}: {msg}
                </p>
              ))
            )}
          </div>
        )}
      </form>

      {/* RESULTADO */}
      {state?.status === "success" && state.data && (
        <div className="bg-gray-50 p-4 rounded-2xl shadow">
          {(() => {
            const rawPlan = JSON.parse(state.data);

            // Adaptador: acepta `details` o `activities`
            const plan = {
              summary: rawPlan.summary,
              tips: rawPlan.tips || [],
              weeklyPlan: rawPlan.weeklyPlan.map(
                (day: {
                  day: string;
                  focus: string;
                  details: string[] | null;
                  activities: string[] | null;
                }) => ({
                  day: day.day,
                  focus: day.focus || null,
                  activities: day.details ? day.details : day.activities || [],
                })
              ),
            };

            return (
              <>
                <h3 className="text-lg font-semibold mb-2">Resumen</h3>
                <p className="mb-4">{plan.summary}</p>

                <h3 className="text-lg font-semibold mb-2">Plan Semanal</h3>
                <div className="space-y-4">
                  {plan.weeklyPlan.map(
                    (dayPlan: { day: string; focus: string }, idx: number) => (
                      <div key={idx} className="bg-white p-3 rounded-lg shadow">
                        <h4 className="font-bold">{dayPlan.day}</h4>
                        {dayPlan.focus && (
                          <p className="text-sm italic text-gray-600 mb-2">
                            {dayPlan.focus}
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>

                <h3 className="text-lg font-semibold mt-4">Tips</h3>
                <ul className="ml-4 list-disc">
                  {plan.tips.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default AsistenteIARoutine;
