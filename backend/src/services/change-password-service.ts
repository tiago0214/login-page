import { compare, hash } from "bcryptjs";
import { UserRepository } from "../repository/user-repository";
import { UserInvalidCredentials } from "./errors/user-invalid-credentials-error";

interface ChangePasswordServiceParams {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export class ChangePasswordService {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    oldPassword,
    newPassword,
  }: ChangePasswordServiceParams) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UserInvalidCredentials();
    }

    const passwordMatch = await compare(oldPassword, user.password_hash);

    if (!passwordMatch) {
      throw new UserInvalidCredentials();
    }

    const newPasswordHash = await hash(newPassword, 4);

    return await this.userRepository.changePassword({
      email,
      newPassword: newPasswordHash,
    });
  }
}
