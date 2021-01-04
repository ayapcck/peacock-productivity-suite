import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Password from './Password';

export default {
    title: 'Organisms/Password',
    component: Password,
    decorators: [ withKnobs ],
    argTypes: {},
};

const Template = (args) => <Password {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
