import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { RegisterForm } from '../index';

export default {
    title: 'Components/Forms/RegisterForm',
    component: RegisterForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <RegisterForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
