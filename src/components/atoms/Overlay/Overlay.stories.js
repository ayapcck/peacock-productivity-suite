import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Overlay from '.';

export default {
    title: 'Atoms/Overlay',
    component: Overlay,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: {
            action: 'overlay clicked',
            defaultValue: null,
        },
    },
};

const Template = (args) => <Overlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
