import { FastifyInstance } from "fastify";
import { register } from "./controller/register";
import { login } from "./controller/login";
import { checkToken } from "../middleware/check-token";

export async function appRoutes(app: FastifyInstance) {
  app.post("/registration", register);

  app.post("/login", login);

  app.get("/profile", { preHandler: [checkToken] }, async (request, reply) => {
    console.log({ email: request.email });

    reply.status(200).send();
  });
}
