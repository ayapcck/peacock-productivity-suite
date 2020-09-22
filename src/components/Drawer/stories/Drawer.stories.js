import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router';

import Drawer from '../index';

export default {
    title: 'Components/Drawer',
    component: Drawer,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => (
    <MemoryRouter initialEntries={['/']}>
        <Drawer {...args} />
    </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};