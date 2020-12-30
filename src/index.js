import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import * as serviceWorker from './serviceWorker';

import { addIcons } from './config/fontawesome';

import App from './App';
import { DARK_THEME } from './constants';
import Firebase, { FirebaseContext } from './config/firebase';

addIcons();

ReactDOM.render(
    <ThemeProvider theme={DARK_THEME}>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
