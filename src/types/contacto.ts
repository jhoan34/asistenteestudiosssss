import { z } from "zod";

const schemaContacto = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

export default schemaContacto;
