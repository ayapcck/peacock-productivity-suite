import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Spinner from './Spinner';

export default {
    title: 'Atoms/Spinner',
    component: Spinner,
    decorators: [ withKnobs ],
    argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
