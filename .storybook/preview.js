import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { ColorTheme } from '../src/constants/colors';

library.add(far, faTimesCircle);

addDecorator(storyFn => <ThemeProvider theme={ColorTheme}>{storyFn()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}