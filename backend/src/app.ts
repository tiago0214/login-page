import fastify from "fastify";
import { appRoutes } from "./http/routes";
import cors from "@fastify/cors";
import { ZodError } from "zod";

export const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(appRoutes);

app.setErrorHandler((err, _, reply) => {
  if (err instanceof ZodError) {
    err.format((error) => {
      return reply.status(400).send({ message: error.message });
    });
  }
});
