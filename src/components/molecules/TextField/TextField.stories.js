import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import TextField from './TextField';

export default {
    title: 'Molecules/TextField',
    component: TextField,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
