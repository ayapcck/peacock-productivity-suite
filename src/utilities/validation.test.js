import { emailValid, passwordValid } from './validation';

describe('emailValid', () => {
    const validEmails = [
        'test@test.ca',
        'test@test.com',
        'test.test@test.com',
        'test.test@test.test.com',
    ];

    const invalidEmails = [
        'test',
        '@something.com',
        'hello.com',
        'a@something',
    ];

    validEmails.forEach((email) => {
        it(`should return true for ${email}`, () => {
            expect(emailValid(email)).toBeTruthy();
        });
    });

    invalidEmails.forEach((email) => {
        it(`should return false for ${email}`, () => {
            expect(emailValid(email)).toBeFalsy();
        });
    });
    
});

describe('passwordValid', () => {
    const validPasswords = [
        'aaaaaaaa',
    ];

    const invalidPasswords = [
        'a',
        'aa',
        'aaa',
        'aaaa',
        'aaaaa',
        'aaaaaa',
        'aaaaaaa',
    ];

    validPasswords.forEach((password) => {
        it(`should return true for ${password}`, () => {
            expect(passwordValid(password)).toBeTruthy();
        });
    });

    invalidPasswords.forEach((password) => {
        it(`should return false for ${password}`, () => {
            expect(passwordValid(password)).toBeFalsy();
        });
    });
});
