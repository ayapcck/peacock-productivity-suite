import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import {
    Wrapper,
} from '../../atoms';
import MenuItem from './MenuItem';

export default {
    title: 'Molecules/MenuItem',
    component: MenuItem,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => (
    <Wrapper>
        <MenuItem {...args} />
    </Wrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
