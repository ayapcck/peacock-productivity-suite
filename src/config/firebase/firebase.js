import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV === 'production'
// eslint-disable-next-line no-undef
    ? process.env.production
// eslint-disable-next-line no-undef
    : process.env;

const config = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DATABASE_URL,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_API_KEY,    
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth API

    createUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);
    signInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);
    signOut = () => this.auth.signOut();
    updatePassword = password => this.auth.currentUser.updatePassword(password);

    // User API
    role = role => this.db.ref(`roles/${role}`);
    roles = () => this.db.ref('roles');
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;
