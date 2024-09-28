import { UserRepository } from "../repository/user-repository";

export class ProfileService {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    return { email: user.email, name: user.name };
  }
}
