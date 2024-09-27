import { hash } from "bcryptjs";
import { UserRepository } from "../repository/user-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

interface RegisterServiceParams {
  name: string;
  email: string;
  password: string;
}

export class RegisterService {
  constructor(private usersRepository: UserRepository) {}

  async execute({ name, email, password }: RegisterServiceParams) {
    const password_hash = await hash(password, 4);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.createUser({
      name,
      email,
      password_hash,
    });

    return { user };
  }
}
