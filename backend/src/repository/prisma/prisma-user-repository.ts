import { User, Prisma } from "@prisma/client";
import { UserRepository, ChangePasswordParams } from "../user-repository";
import { prisma } from "../../lib/prisma";

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async changePassword({ email, newPassword }: ChangePasswordParams) {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        password_hash: newPassword,
      },
    });

    return "Password has been changed.";
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
