import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email().min(10),
  password: z.string().min(8),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 1024 * 1024 * 5, {
      message: "Max 5MB",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Image only",
    })
    .nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isadmin: z.optional(z.boolean()) || false,
});

export default userSchema;
