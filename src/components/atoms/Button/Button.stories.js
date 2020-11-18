import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Button from '.';

export default {
    title: 'Atoms/Button',
    component: Button,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Test Button',
};
