import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";
import { ProfileService } from "../../services/profile-service";
import { TokenNotProvidedError } from "../../middleware/errors/token-not-provided-error";
import { UserNotFoundError } from "../../services/errors/user-not-found-error";

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const { email } = request;

  try {
    const userRepository = new PrismaUserRepository();
    const profileService = new ProfileService(userRepository);

    const user = await profileService.execute(email);

    return reply.status(200).send(user);
  } catch (err) {
    if (err instanceof UserNotFoundError) {
      reply.status(404).send({ message: err.message });
    }

    throw err;
  }
}
