// app/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { AlertTriangle } from "lucide-react"; // puedes instalar lucide-react si aún no lo tienes

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-6 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border border-red-300">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          ¡Oops! Algo salió mal
        </h1>
        <p className="text-gray-700 mb-4">
          {error ? `Error: ${error}` : "Ha ocurrido un error desconocido."}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
