import { z } from "zod";

const schemaLogin = z.object({
  email: z.string(),
  password: z.string(),
});
export default schemaLogin;
