import { PasswordValueObject } from './password-value-object';

describe('Password Value Object', () => {
  it('should return valid password', () => {
    const password = PasswordValueObject.create('Dhfkldlfjadjl');

    expect(password.isRight()).toBe(true);
  });

  it('should return invalid password', () => {
    const password = PasswordValueObject.create('dhfkldlfjadjl');

    expect(password.isLeft()).toBe(true);
  });
  it('should return a valid status in password encryption ', () => {
    const password = PasswordValueObject.create('Dhfkldlfjadjl');
    (password.value as PasswordValueObject).encrypt_password();
    expect(password.isRight()).toBe(true);
    expect((password.value as PasswordValueObject).isAlreadyEncrypted).toBe(
      true,
    );
  });
});
