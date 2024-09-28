import { FastifyInstance } from "fastify";
import { register } from "./controller/register";
import { login } from "./controller/login";
import { checkToken } from "../middleware/check-token";
import { profile } from "./controller/profile";

export async function appRoutes(app: FastifyInstance) {
  app.post("/registration", register);

  app.post("/login", login);

  app.get("/profile", { preHandler: [checkToken] }, profile);
}
