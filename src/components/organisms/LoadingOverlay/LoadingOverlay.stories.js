import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import LoadingOverlay from './LoadingOverlay';

export default {
    title: 'Organisms/LoadingOverlay',
    component: LoadingOverlay,
    decorators: [ withKnobs ],
    argTypes: {
    },
};

const Template = (args) => <LoadingOverlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
