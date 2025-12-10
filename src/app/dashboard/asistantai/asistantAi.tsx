"use client";

import React from "react";
import { useActionState } from "react";
import { processAndChat } from "@/app/actions/processChatasist";
import { RoutineState } from "@/types/pages/asistantai/asistanai";
import {
  RoutineDay,
  RoutineActivity,
} from "@/types/pages/asistantai/asistanai";

const RoutinePlanner: React.FC = () => {
  const [state, formAction, isPending] = useActionState<RoutineState, FormData>(
    processAndChat,
    null
  );

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* FORM */}
      <form
        action={formAction}
        className="bg-white p-4 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-xl font-bold">Crear rutina semanal</h2>

        <input type="hidden" name="userId" value="u123" />

        <input
          type="text"
          name="goal"
          placeholder="Objetivo (ej. mejorar productividad)"
          className="w-full p-2 border rounded"
          required
        />

        <select name="routineType" className="w-full p-2 border rounded">
          <option value="fitness">Fitness</option>
          <option value="study">Estudio</option>
          <option value="work">Trabajo</option>
          <option value="mixed">Mixto</option>
        </select>

        <input
          type="text"
          name="preferences"
          placeholder="Preferencias (separadas por comas)"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="constraints"
          placeholder="Limitaciones (separadas por comas)"
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="daysPerWeek"
          placeholder="Días por semana"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="timePerDay"
          placeholder="Horas por día"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Generando..." : "Generar rutina"}
        </button>

        {/* Errores de validación */}
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
            const plan = JSON.parse(state.data);
            return (
              <>
                <h3 className="text-lg font-semibold mb-2">Resumen</h3>
                <p className="mb-4">{plan.summary}</p>

                <h3 className="text-lg font-semibold mb-2">Plan Semanal</h3>
                <div className="space-y-4">
                  {plan.weeklyPlan.map((dayPlan: RoutineDay, idx: number) => (
                    <div key={idx} className="bg-white p-3 rounded-lg shadow">
                      <h4 className="font-bold">{dayPlan.day}</h4>
                      <ul className="ml-4 list-disc">
                        {dayPlan.activities.map(
                          (act: RoutineActivity, i: number) => (
                            <li key={i}>
                              <span className="font-medium">{act.time}</span> -{" "}
                              {act.activity} ({act.category})
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
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

export default RoutinePlanner;
