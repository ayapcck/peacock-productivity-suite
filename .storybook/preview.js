import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { addDecorator } from '@storybook/react';

import ThemeKnob from './ThemeKnob';

library.add(far, faTimesCircle);

addDecorator(storyFn => <ThemeKnob>{storyFn()}</ThemeKnob>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}