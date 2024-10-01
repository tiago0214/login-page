import { Prisma, User } from "@prisma/client";

export interface ChangePasswordParams {
  newPassword: string;
  email: string;
}

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(data: Prisma.UserCreateInput): Promise<User>;
  changePassword(data: ChangePasswordParams): Promise<string | null>;
}
