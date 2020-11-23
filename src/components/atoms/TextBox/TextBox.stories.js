import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import TextBox from '.';

export default {
    title: 'Atoms/TextBox',
    component: TextBox,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => <TextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeHolder: 'Placeholder',
};

export const Invalid = Template.bind({});
Invalid.args = {
    placeHolder: 'Placeholder',
    valid: false,
};
