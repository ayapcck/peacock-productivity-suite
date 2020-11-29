import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Popup from '.';

export default {
    title: 'Molecules/Popup',
    component: Popup,
    decorators: [ withKnobs ],
    argTypes: {
        handleClose: { action: 'popup closed' },
    },
};

const TestContent = () => (
    <div>I am test text</div>
);

const Template = (args) => (
    <Popup {...args}>
        <TestContent />
    </Popup>
);

export const Primary = Template.bind({});
Primary.args = {};
