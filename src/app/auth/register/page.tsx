"use client";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formRegister, State } from "@/app/actions/formRegister";
import userSchema from "@/types/pages/auth/register.type";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  const [formState, formAction] = useActionState<State, FormData>(
    async (state, formData) => {
      setLoad(true);
      const result = await formRegister("register", formData);
      setLoad(false);
      return result;
    },
    null
  );

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: undefined,
    },
  });

  useEffect(() => {
    if (formState?.status === "Success") {
      toast.success(formState.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } else if (formState?.status === "Error") {
      toast.error(formState.message);
    }
  }, [formState, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <Form {...form}>
        <form
          action={formAction}
          className="w-full max-w-md bg-zinc-900 p-6 rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-amber-500">
            Create Account
          </h2>

          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-300"
            >
              Name
            </label>
            <Input
              className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-amber-500"
              placeholder="Name"
              name="name"
              type="text"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-amber-500"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <Input
              placeholder="Password"
              name="password"
              type="password"
              className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-amber-500"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-zinc-300"
            >
              Profile Image
            </label>
            <Input
              accept="image/*"
              type="file"
              name="image"
              className="w-full bg-zinc-800 text-white border border-zinc-700 file:text-amber-500 file:bg-zinc-800 file:border-none"
              multiple={false}
            />
          </div>

          <button
            type="submit"
            disabled={load}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-xl font-medium transition-colors disabled:opacity-50"
          >
            {load ? "Registering..." : "Register"}
          </button>

          {formState?.status === "Error" && (
            <div className="text-red-500 text-sm text-center">
              {formState.message}
            </div>
          )}
          <div className="flex justify-center items-center flex-col">
            <p>¿Ya tienes cuenta?</p>
            <Link
              href="/auth/login"
              className="text-1xl capitalize text-amber-500"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
