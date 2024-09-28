import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    email: string;
  }
}
