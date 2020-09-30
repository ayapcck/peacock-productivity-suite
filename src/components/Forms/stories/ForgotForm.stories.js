import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ForgotForm } from '../index';

export default {
    title: 'Components/Forms/ForgotForm',
    component: ForgotForm,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => <ForgotForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};