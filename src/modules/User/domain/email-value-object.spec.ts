import { DefaultErro } from '@shared/Erro/DefaultErro';
import { EmailValueObject } from './email-value-object';

describe('Email Value Object', () => {
  it('should return valid email', () => {
    const email = EmailValueObject.create('asasasa@domain.com.br');

    expect(email.isRight()).toBe(true);
    expect((email.value as EmailValueObject).value).toBe(
      'asasasa@domain.com.br',
    );
  });

  it('should return invalid email', () => {
    const email = EmailValueObject.create('asasasa');
    expect(email.isLeft()).toBe(true);
    expect((email.value as DefaultErro).message).toBe(
      'email asasasa is invalid',
    );
  });

  it('should return lowcase email', () => {
    const email = EmailValueObject.create('AsASaSa@domain.com.br');

    expect(email.isRight()).toBe(true);
    expect((email.value as EmailValueObject).value).toBe(
      'asasasa@domain.com.br',
    );
  });
});
