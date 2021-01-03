class firebase {
    // Auth API
    createUserWithEmailAndPassword = () => jest.fn();
    sendPasswordResetEmail = () => jest.fn();
    signInWithEmailAndPassword = () => jest.fn();
    signOut = () => jest.fn();
    updatePassword = () => jest.fn();

    // User API
    role = () => jest.fn();
    roles = () => jest.fn();
    user = () => jest.fn();
    users = () => jest.fn();

    getRole = () => jest.fn();
    getUser = () => jest.fn();
}

export default new firebase();
