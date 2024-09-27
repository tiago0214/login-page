import { compare } from "bcryptjs";
import { UserRepository } from "../repository/user-repository";
import { UserInvalidCredentials } from "./errors/user-invalid-credentials-error";
import { sign } from "jsonwebtoken";
import { env } from "../env/env";

interface LoginServiceParams {
  password: string;
  email: string;
}

export class LoginService {
  constructor(private userRepository: UserRepository) {}

  async execute({ password, email }: LoginServiceParams) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UserInvalidCredentials();
    }

    const password_hash = await compare(password, user.password_hash);

    if (!password_hash) {
      throw new UserInvalidCredentials();
    }

    const accessToken = sign(
      {
        id: user.id,
        email: user.email,
      },
      env.SECRET,
      {
        expiresIn: 86400,
      },
    );

    return accessToken;
  }
}
