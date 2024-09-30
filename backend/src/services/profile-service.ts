import { UserRepository } from "../repository/user-repository";
import { UserNotFoundError } from "./errors/user-not-found-error";

export class ProfileService {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    return { email: user.email, name: user.name };
  }
}
