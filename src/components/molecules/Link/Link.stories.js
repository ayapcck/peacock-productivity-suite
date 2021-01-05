import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Link from './Link';

export default {
    title: 'Molecules/Link',
    component: Link,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => <Link { ...args } />;

export const Primary = Template.bind({});
Primary.args = {};
