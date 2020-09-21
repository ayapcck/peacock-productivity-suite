import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { select } from '@storybook/addon-knobs';

import { DarkTheme, LightTheme } from '../src/constants/colors';

const GlobalStyle = createGlobalStyle`
    #root {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;

const themes = { Dark: DarkTheme, Light: LightTheme };
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