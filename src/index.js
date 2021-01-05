import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import * as serviceWorker from './serviceWorker';

import { addIcons } from './config/fontawesome';
import { DARK_THEME } from './constants';
import store from './redux';

import App from './App';

addIcons();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={DARK_THEME}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
