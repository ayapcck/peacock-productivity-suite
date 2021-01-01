import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import {
    Icon,
} from '../../atoms';
import ContentOverlay from './ContentOverlay';

export default {
    title: 'Molecules/ContentOverlay',
    component: ContentOverlay,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => (
    <ContentOverlay {...args}>
        <Icon />
    </ContentOverlay>
);

export const Primary = Template.bind({});
Primary.args = {};
