import { User, Prisma } from "@prisma/client";
import { UserRepository } from "../user-repository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findByEmail(email: string) {
    const user = this.users.find((user) => {
      return user.email === email;
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: "user-id1",
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    };

    this.users.push(user);

    return user;
  }
}
