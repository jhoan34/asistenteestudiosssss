"use client";

import { useForm } from "react-hook-form";
import { useActionState, useEffect } from "react";
import { ReponseContacto, createContacto } from "@/app/actions/contatctoaction";
import z from "zod";
import schemaContacto from "@/types/contacto";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Contacto() {
  const [formContacto, formContactoAction] = useActionState<
    ReponseContacto,
    FormData
  >(
    async (
      state: ReponseContacto,
      formData: FormData
    ): Promise<ReponseContacto> => {
      const result = await createContacto(formData);
      if (!result) {
        throw new Error("Contact creation failed");
      }
      return result;
    },
    {
      success: false,
      message: "",
    }
  );

  const form = useForm<z.infer<typeof schemaContacto>>({
    resolver: zodResolver(schemaContacto),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formContacto.success) {
      form.reset();
    }
  }, [formContacto.success, form]);

  return (
    <section
      id="contacto"
      className="w-full min-h-screen  py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto bg-[#282628] shadow-lg rounded-xl p-8 border border-amber-400">
        <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
          Contacto
        </h2>

        <Form {...form}>
          <form action={formContactoAction} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Nombre
              </label>
              <Input
                name="name"
                placeholder="Ingresa tu nombre"
                className="w-full placeholder:text-gray-200 border border-amber-400 rounded-md shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <Input
                name="email"
                placeholder="Ingresa tu email"
                className="w-full placeholder:text-gray-200 border border-amber-400 rounded-md shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Teléfono
              </label>
              <Input
                name="phone"
                placeholder="Ingresa tu teléfono"
                className="w-full border placeholder:text-gray-200 border-amber-400 rounded-md shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                placeholder="Ingresa tu mensaje"
                rows={4}
                className="w-full border placeholder:text-gray-200 border-amber-400 rounded-md shadow-sm p-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-md"
              >
                Enviar
              </Button>
            </div>

            {formContacto.message && (
              <p
                className={`text-center text-sm ${
                  formContacto.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {formContacto.message}
              </p>
            )}
          </form>
        </Form>
      </div>
    </section>
  );
}
