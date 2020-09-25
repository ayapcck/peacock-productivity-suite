import { emailValid } from './validation';

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