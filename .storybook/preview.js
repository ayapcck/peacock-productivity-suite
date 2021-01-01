import React from 'react';
import { Provider } from 'react-redux';
import { addDecorator } from '@storybook/react';

import ThemeKnob from './ThemeKnob';
import { addIcons } from '../src/config/fontawesome';

addIcons();

const store = {
    getState: () => {
      return {
        authentication: {
            loading: 'pending',
        }
      };
    },
    subscribe: () => 0,
};

addDecorator(storyFn => (
    <Provider store={store}>
        <ThemeKnob>
            {storyFn()}
        </ThemeKnob>
    </Provider>
));

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*",
    },
}
