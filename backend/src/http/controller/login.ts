import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";
import { LoginService } from "../../services/login-service";
import { UserInvalidCredentials } from "../../services/errors/user-invalid-credentials-error";

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginSchema = z.object({
    password: z.string(),
    email: z.string().email(),
  });

  const { email, password } = loginSchema.parse(request.body);

  try {
    const userRepository = new PrismaUserRepository();
    const loginService = new LoginService(userRepository);

    const credentials = await loginService.execute({ email, password });

    reply.status(200).send({ accessToken: credentials });
  } catch (err) {
    if (err instanceof UserInvalidCredentials) {
      return reply.status(401).send({ message: err.message });
    }

    throw err;
  }
}
