import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Wrapper from './Wrapper';

export default {
    title: 'Atoms/Wrapper',
    component: Wrapper,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper {...args}>
        <span>Testing</span>
        <span>Testing</span>
        <span>Testing</span>
    </Wrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
