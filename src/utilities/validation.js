export const emailValid = email => {
    const emailRegex = RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);
    return emailRegex.test(email);
};

export const passwordValid = password => {
    const passwordRegex = RegExp(/([a-zA-Z0-9@!#$%&]{8,})$/);
    return passwordRegex.test(password);
}