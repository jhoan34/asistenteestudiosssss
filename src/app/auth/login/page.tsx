"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleCredentialsSignin } from "@/app/actions/signIn";
import { toast } from "sonner";

import schemaLogin from "@/types/pages/auth/login";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const form = useForm<z.infer<typeof schemaLogin>>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const router = useRouter();

  const submit = async (data: z.infer<typeof schemaLogin>) => {
    try {
      const response = await handleCredentialsSignin(data);
      if (response.status !== "success") {
        throw new Error(response.message);
      }
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <Form {...form}>
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full max-w-md space-y-6 bg-zinc-900 p-8 rounded-2xl shadow-lg text-white"
        >
          <h2 className="text-3xl font-bold text-center text-amber-500">
            Iniciar sesión
          </h2>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Correo electrónico"
              {...register("email")}
              className="bg-zinc-800 text-white border-zinc-700 focus:border-amber-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
              className="bg-zinc-800 text-white border-zinc-700 focus:border-amber-500"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-500 transition-colors text-white font-semibold"
          >
            Entrar
          </Button>
          <div className="flex justify-center items-center flex-col">
            <p>¿No tienes cuenta?</p>
            <Link
              href="/auth/register"
              className="text-1xl capitalize text-amber-500"
            >
              Registrar
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
}
