import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { LoginForm } from '../index';

export default {
    title: 'Components/Forms/LoginForm',
    component: LoginForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
