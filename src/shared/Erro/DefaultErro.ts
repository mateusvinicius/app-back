export class DefaultErro extends Error {
  private readonly erro_code;

  private constructor(message: string, code?: number) {
    super(message);
    this.erro_code = code;
    Object.freeze(this);
  }

  get message(): string {
    return this.message;
  }

  public static create(message: string, code?: number): DefaultErro {
    return new DefaultErro(message, code);
  }
}
