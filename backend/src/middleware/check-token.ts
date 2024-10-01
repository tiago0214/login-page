import { FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import { env } from "../env/env";
import { jwtDecode } from "jwt-decode";
import { TokenNotProvidedError } from "./errors/token-not-provided-error";

interface UserCredentials {
  email: string;
}

export async function checkToken(request: FastifyRequest) {
  const token = request.headers.authorization;

  console.log(token);

  if (!token) {
    throw new TokenNotProvidedError();
  }

  const [, accessToken] = token.split(" ");

  if (accessToken === "undefined") {
    throw new TokenNotProvidedError();
  }

  verify(accessToken, env.SECRET);

  const deco = jwtDecode<UserCredentials>(accessToken);

  request.email = deco.email;
}

// to do: fix not email provide, zod error on login
