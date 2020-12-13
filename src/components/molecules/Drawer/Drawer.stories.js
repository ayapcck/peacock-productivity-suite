import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Drawer from './Drawer';

export default {
    title: 'Molecules/Drawer',
    component: Drawer,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => (
    <Drawer {...args}>
        <div>I am test content</div>
    </Drawer>
);

export const Primary = Template.bind({});
Primary.args = {};
