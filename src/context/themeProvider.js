import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
    DarkTheme,
    LightTheme,
} from '../constants/theme';

const withLightTheme = (Component) => (props) => (
    <ThemeProvider theme={LightTheme}>
        <Component { ...props } />
    </ThemeProvider>
);
const withDarkTheme = (Component) => (props) => (
    <ThemeProvider theme={DarkTheme}>
        <Component { ...props } />
    </ThemeProvider>
);

export {
    withDarkTheme,
    withLightTheme,
};
