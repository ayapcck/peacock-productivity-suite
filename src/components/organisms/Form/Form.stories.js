import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Form from './Form';

export default {
    title: 'Molecules/Form',
    component: Form,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
