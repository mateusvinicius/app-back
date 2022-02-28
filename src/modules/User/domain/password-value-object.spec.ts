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
});
