import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import TextBox from './TextBox';

export default {
    title: 'Atoms/TextBox',
    component: TextBox,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <TextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Invalid = Template.bind({});
Invalid.args = {
    valid: false,
};