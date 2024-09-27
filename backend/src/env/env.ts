import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success !== true) {
  console.error("⚔️ Invalid environmennt variables");

  throw new Error("Invalid environment variables");
}

export const env = _env.data;
