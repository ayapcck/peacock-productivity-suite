import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
    DARK_THEME,
    LIGHT_THEME,
} from '../constants';

const withLightTheme = (Component) => (props) => (
    <ThemeProvider theme={LIGHT_THEME}>
        <Component { ...props } />
    </ThemeProvider>
);
const withDarkTheme = (Component) => (props) => (
    <ThemeProvider theme={DARK_THEME}>
        <Component { ...props } />
    </ThemeProvider>
);

export {
    withDarkTheme,
    withLightTheme,
};
