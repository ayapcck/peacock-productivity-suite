import app from 'firebase/app';

const env = process.env.NODE_ENV === 'production'
    ? process.env.production
    : process.env;

const config = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DATABASE_URL,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_API_KEY    
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;