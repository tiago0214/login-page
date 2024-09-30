import { it, describe, expect } from "vitest";
import { InMemoryUserRepository } from "../../repository/memory/in-memory-user-repository";
import { RegisterService } from "../register-service";
import { UserAlreadyExistsError } from "../errors/user-already-exists-error";
import { compare } from "bcryptjs";

describe("Register service", () => {
  it("should create a new user", async () => {
    const userRepository = new InMemoryUserRepository();
    const registerService = new RegisterService(userRepository);

    const user = await registerService.execute({
      name: "john",
      email: "john@john.com",
      password: "123456",
    });

    expect(user.user.id).toEqual(expect.any(String));
  });

  it("should hash user password on registration", async () => {
    const userRepository = new InMemoryUserRepository();
    const registerService = new RegisterService(userRepository);

    const { user } = await registerService.execute({
      name: "john",
      email: "john@john.com",
      password: "123456",
    });

    const passwordHashMatch = await compare("123456", user.password_hash);

    expect(passwordHashMatch).toBe(true);
  });

  it("should throw a user already exists error", async () => {
    const userRepository = new InMemoryUserRepository();
    const registerService = new RegisterService(userRepository);

    await registerService.execute({
      name: "john",
      email: "john@john.com",
      password: "123456",
    });

    expect(async () => {
      await registerService.execute({
        name: "john",
        email: "john@john.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
