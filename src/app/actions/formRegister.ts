"use server";

import bcrypt from "bcrypt";
import userSchema from "@/types/pages/auth/register.type";
import { api } from "../../../convex/_generated/api";
import { fetchQuery, fetchMutation } from "convex/nextjs";
import { uploadThingImages } from "./uploadImages";

export type State = {
  status: "Success" | "Error";
  message: string;
} | null;

export async function formRegister(
  dasd: string,
  formdata: FormData
): Promise<State> {
  const valid = userSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: formdata.get("password"),
    image: formdata.get("image"),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isadmin: false,
  });
  if (!valid.success) {
    return {
      status: "Error",
      message: valid.error.message,
    };
  }
  const getUser = await fetchQuery(api.functions.user.crud.getuser, {
    email: valid.data?.email as string,
  });
  if (getUser) {
    return {
      status: "Error",
      message: "User already exists",
    };
  }
  const password = await bcrypt.hash(valid.data?.password as string, 10);
  const imageUrl: string = await uploadThingImages(valid.data?.image as File);
  console.log(imageUrl);
  const createUser = await fetchMutation(api.functions.user.crud.createUser, {
    ...valid.data,
    image: imageUrl,
    password,
  });
  if (!createUser) {
    return {
      status: "Error",
      message: "Register failed",
    };
  }

  return {
    status: "Success",
    message: "Register success",
  };
}
