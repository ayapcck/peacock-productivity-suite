import React from 'react';

import TextBox from '../index';

export default {
    title: 'Subcomponents/TextBox',
    component: TextBox,
    argTypes: {
        
    },
};

const Template = (args) => <TextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholderText: 'Placeholder'
};