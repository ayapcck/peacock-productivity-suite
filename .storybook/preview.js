import React from 'react';

import { addDecorator } from '@storybook/react';

import ThemeKnob from './ThemeKnob';
import { addIcons } from '../src/config/fontawesome';

addIcons();

addDecorator(storyFn => <ThemeKnob>{storyFn()}</ThemeKnob>);

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
}