import { ValueObject } from '@shared/domain/value-object';
import { Either, right, left } from '@shared/Either/either';
import { DefaultErro } from '@shared/Erro/DefaultErro';
import { hashSync, compareSync } from 'bcrypt';

interface IPasswordValueObject {
  value: string;
}
const SALT = 10;
export class PasswordValueObject extends ValueObject<IPasswordValueObject> {
  private isEncripted: boolean;

  private constructor(props: IPasswordValueObject) {
    super(props);
  }

  get isAlreadyEncrypted(): boolean {
    return this.isEncripted;
  }

  async encrypt_password(): Promise<void> {
    this.props.value = hashSync(this.props.value, SALT);
    this.isEncripted = true;
  }

  public static create(
    password: string,
  ): Either<DefaultErro, PasswordValueObject> {
    if (password.length < 8 || !/[A-Z]/.test(password)) {
      return left(
        DefaultErro.create(
          'The password must be at least 8 characters long and contain at least one capital letter.',
        ),
      );
    }
    return right(
      new PasswordValueObject({
        value: password,
      }),
    );
  }
}
