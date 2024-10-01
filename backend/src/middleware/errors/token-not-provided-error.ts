export class TokenNotProvidedError extends Error {
  constructor() {
    super("Need to login first");
  }
}
