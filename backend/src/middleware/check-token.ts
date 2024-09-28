import { FastifyReply, FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import { env } from "../env/env";
import { jwtDecode } from "jwt-decode";

interface UserCredentials {
  email: string;
}

export async function checkToken(request: FastifyRequest, reply: FastifyReply) {
  const token = request.headers.authorization;

  if (!token) {
    return reply.status(401).send({ message: "Unauthorized" });
  }

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, env.SECRET);

    const deco = jwtDecode<UserCredentials>(accessToken);

    request.email = deco.email;
  } catch (error) {
    reply.status(401).send({
      message: "Access token with error",
    });
  }
}
