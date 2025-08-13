"use client";
import { signIn, signOut } from "next-auth/react";

export type State = {
  status: "success" | "error";
  message: string;
};

export async function handleCredentialsSignin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<State> {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true, // ⛔️ No redirecciona automáticamente
      callbackUrl: "/dashboard",
    });
    console.log(result);
    if (!result || result.error) {
      return {
        status: "error",
        message: result?.error || "Credenciales inválidas",
      };
    }

    return {
      status: "success",
      message: "Inicio de sesión exitoso",
    };
  } catch (error) {
    console.error("Error en signIn:", error);
    return {
      status: "error",
      message: "Error interno del servidor",
    };
  }
}

export async function handleGithubSignin() {
  await signIn("github", { redirectTo: "/" });
}

export async function handleSignOut() {
  const result = await signOut({ redirect: true, callbackUrl: "/auth/login" });
  if (result && "error" in result) {
    return {
      status: "error",
      message: "Error al cerrar sesión",
    };
  }
  return {
    status: "success",
    message: "Cierre de sesión exitoso",
  };
}
