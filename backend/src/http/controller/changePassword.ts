import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../repository/prisma/prisma-user-repository";
import { ChangePasswordService } from "../../services/change-password-service";
import { z } from "zod";
import { UserInvalidCredentials } from "../../services/errors/user-invalid-credentials-error";

export async function changePassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const passwordBodySchema = z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  });

  const { oldPassword, newPassword } = passwordBodySchema.parse(request.body);

  const { email } = request;

  console.log({
    email,
    oldPassword,
    newPassword,
  });

  try {
    const userRepository = new PrismaUserRepository();
    const passwordService = new ChangePasswordService(userRepository);

    await passwordService.execute({ email, newPassword, oldPassword });
  } catch (err) {
    if (err instanceof UserInvalidCredentials) {
      return reply.status(400).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(200).send({
    message: "Password has been changed",
  });
}
