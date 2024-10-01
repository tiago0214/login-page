import { FastifyInstance, FastifyReply } from "fastify";
import { register } from "./controller/register";
import { login } from "./controller/login";
import { checkToken } from "../middleware/check-token";
import { profile } from "./controller/profile";
import { changePassword } from "./controller/changePassword";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", (_, reply: FastifyReply) => {
    return reply.status(200).send();
  });

  app.post("/register", register);

  app.post("/login", login);

  app.get("/profile", { preHandler: [checkToken] }, profile);

  app.post("/password", { preHandler: [checkToken] }, changePassword);
}
