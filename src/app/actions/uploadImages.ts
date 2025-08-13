"use server";

import { utapi } from "@/lib/uploadingapi";

type UploadFileResponse =
  | { data?: UploadData; error: null }
  | { data: null; error: UploadError };

type UploadData = {
  key: string;
  url: string;
  name: string;
  size: number;
};

type UploadError = {
  code: string;
  message: string;
  data?: unknown;
};

export async function uploadThingImages(file: File): Promise<string> {
  try {
    // ✅ Condición corregida
    if (file.size > 1024 * 1024 * 5) {
      throw new Error("El archivo debe ser menor de 5MB");
    }

    const arrayBuffer = await file.arrayBuffer();
    const fileCreate = new File([arrayBuffer], file.name, { type: file.type });

    const data: UploadFileResponse = await utapi.uploadFiles(fileCreate);

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.data?.url || "default"; // fallback por si acaso
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    return "default"; // 🔁 Siempre retornar un string válido
  }
}
