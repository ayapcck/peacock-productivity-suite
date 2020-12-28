import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Menu from './Menu';

export default {
    title: 'Organisms/Menu',
    component: Menu,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
