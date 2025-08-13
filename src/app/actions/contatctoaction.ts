"use server";
import { fetchMutation } from "convex/nextjs";
import schemaContacto from "@/types/contacto";
import { api } from "../../../convex/_generated/api";

export type ReponseContacto = {
  success: boolean;
  message: string;
};
export async function createContacto(
  args: FormData
): Promise<ReponseContacto | undefined> {
  try {
    const result = schemaContacto.safeParse(args);
    if (!result.success) {
      throw new Error(result.error.message);
    }
    const dataobject = {
      name: args?.get("name") as string,
      email: args?.get("email") as string,
      phone: args?.get("phone") as string,
      message: args?.get("message") as string,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const contact = await fetchMutation(
      api.functions.contacto.crud.createContactos,
      dataobject
    );
    if (!contact) {
      throw new Error("Error al crear el contacto");
    }
    return {
      success: true,
      message: "Contacto creado exitosamente",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "Error al crear el contacto",
      };
    }
  }
}
