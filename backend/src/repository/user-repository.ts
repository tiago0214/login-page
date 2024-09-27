import { Prisma, User } from "@prisma/client";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(data: Prisma.UserCreateInput): Promise<User>;
}
