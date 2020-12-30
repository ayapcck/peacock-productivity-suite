import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Navigation from './Navigation';

export default {
    title: 'Templates/Navigation',
    component: Navigation,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
