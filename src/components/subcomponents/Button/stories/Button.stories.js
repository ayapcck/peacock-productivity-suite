import React from 'react';

import Button from '../index';

export default {
    title: 'Subcomponents/Button',
    component: Button,
    argTypes: {
        
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Test Button'
};