import { it, describe, expect } from "vitest";
import { InMemoryUserRepository } from "../../repository/memory/in-memory-user-repository";
import { RegisterService } from "../register-service";

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
});
