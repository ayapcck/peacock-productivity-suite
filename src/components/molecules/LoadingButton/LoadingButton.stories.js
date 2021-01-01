import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import LoadingButton from './LoadingButton';

export default {
    title: 'Molecules/LoadingButton',
    component: LoadingButton,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => <LoadingButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
