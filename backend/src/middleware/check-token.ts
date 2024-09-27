import { FastifyReply, FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import { env } from "../env/env";
import { jwtDecode } from "jwt-decode";

interface UserCredentials {
  userId: string;
  email: string;
}

export async function checkToken(request: FastifyRequest, reply: FastifyReply) {
  const token = request.headers.authorization;

  if (!token) {
    return reply.status(401).send({ message: "Access token not informed" });
  }

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, env.SECRET);

    const deco = jwtDecode<UserCredentials>(accessToken);

    request.userId = deco.userId;
    request.email = deco.email;
  } catch (error) {
    reply.status(409).send({
      message: "Access token with error",
    });
  }
}
