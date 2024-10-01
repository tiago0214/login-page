import fastify from "fastify";
import { appRoutes } from "./http/routes";
import cors from "@fastify/cors";
import { ZodError } from "zod";
import { TokenNotProvidedError } from "./middleware/errors/token-not-provided-error";
import { JsonWebTokenError } from "jsonwebtoken";
import { env } from "./env/env";

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

  if (err instanceof TokenNotProvidedError) {
    return reply.status(400).send({ message: err.message });
  }

  if (err instanceof JsonWebTokenError) {
    return reply.status(400).send({ message: err.message });
  }

  if (env.NODE_ENV === "dev") {
    console.log(err);
  }

  reply.status(500).send({
    message: "Internal server error",
  });
});
