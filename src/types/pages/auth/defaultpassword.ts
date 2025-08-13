import { z } from "zod";

const schemaDefaultPassword = z.object({
  password: z.string().min(8),
});

const schemaDefaultpasswordEmail = z.object({
  email: z.string().email().min(10),
});

const schemaDefaultCode = z.object({
  code: z.string().min(6),
});

export { schemaDefaultPassword, schemaDefaultpasswordEmail, schemaDefaultCode };
