const MockFirebase = jest.fn(() => ({
    signOut: jest.fn(() => Promise.resolve(true)),
}));

export default MockFirebase;
