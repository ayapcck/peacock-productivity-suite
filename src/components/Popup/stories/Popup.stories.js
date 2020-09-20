import React from 'react';

import Popup from '../index';

export default {
    title: 'Popup',
    component: Popup,
    argTypes: {
        
    },
};

const Template = (args) => <Popup {...args} />;

const popupContent = (
    <div>Test Content</div>
);

export const Default = Template.bind({});
Default.args = {
    popupContent
};

export const Short = Template.bind({});
Short.args = {
    popupContent,
    tall: false
}
