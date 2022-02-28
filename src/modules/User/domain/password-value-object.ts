import { ValueObject } from '@shared/domain/value-object';
import { Either, right, left } from '@shared/Either/either';
import { DefaultErro } from '@shared/Erro/DefaultErro';

interface IPasswordValueObject {
  value: string;
}

export class PasswordValueObject extends ValueObject<IPasswordValueObject> {
  private readonly PasswordIsValid: boolean;

  private constructor(props: IPasswordValueObject) {
    super(props);
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
