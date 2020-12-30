import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { select } from '@storybook/addon-knobs';

import {
    DARK_THEME,
    LIGHT_THEME,
} from '../src/constants';

const GlobalStyle = createGlobalStyle`
    #root {
        background-color: ${({ theme }) => theme.color.primary.background};
    }
`;

const themes = {
    Dark: DARK_THEME,
    Light: LIGHT_THEME
};
const themeNames = Object.keys(themes);

export default ({ children }) => {
    const theme = select(
        "Theme",
        themeNames,
        themeNames[0],
        "Themes"
    );

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};