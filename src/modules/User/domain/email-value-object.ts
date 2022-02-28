import { ValueObject } from '@shared/domain/value-object';
import { Either, left, right } from '@shared/Either/either';
import { DefaultErro } from '@shared/Erro/DefaultErro';
import isEmail from 'validator/lib/isEmail';

interface IEmailValueObject {
  value: string;
}

export class EmailValueObject extends ValueObject<IEmailValueObject> {
  private constructor(props: IEmailValueObject) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(email: string): Either<DefaultErro, EmailValueObject> {
    if (!isEmail(email)) {
      return left(DefaultErro.create(`email ${email} is invalid`));
    }
    return right(
      new EmailValueObject({
        value: email.toLowerCase(),
      }),
    );
  }
}
