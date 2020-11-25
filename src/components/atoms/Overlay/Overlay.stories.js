import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Overlay from '.';

export default {
    title: 'Atoms/Overlay',
    component: Overlay,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <Overlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
