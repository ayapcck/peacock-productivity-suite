import React from 'react';
import { MemoryRouter } from 'react-router';
import { withKnobs } from '@storybook/addon-knobs';

import NavLink from './NavLink';

export default {
    title: 'Molecules/NavLink',
    component: NavLink,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => (
    <MemoryRouter initialEntries={[ '/' ]}>
        <NavLink {...args} />
    </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
