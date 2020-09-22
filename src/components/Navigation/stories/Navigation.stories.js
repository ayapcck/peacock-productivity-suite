import React from 'react';
import { MemoryRouter } from 'react-router';
import { withKnobs } from '@storybook/addon-knobs';

import Navigation from '../index';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => (
    <MemoryRouter initialEntries={['/']}>
        <Navigation {...args} />
    </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};