import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Authentication from './Authentication';

export default {
    title: 'Organisms/Authentication',
    component: Authentication,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <Authentication {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
