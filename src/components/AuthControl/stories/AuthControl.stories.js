import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import AuthControl from '../index';

export default {
    title: 'Components/AuthControl',
    component: AuthControl,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <AuthControl {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const ChangePassword = Template.bind({});
ChangePassword.args = {
    useChangePasswordForm: true,
};
