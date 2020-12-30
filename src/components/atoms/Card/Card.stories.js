import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Card from './Card';

export default {
    title: 'Atoms/Card',
    component: Card,
    decorators: [ withKnobs ],
    argTypes: {},
};

const Template = (args) => <Card { ...args } />;

export const Primary = Template.bind({});
Primary.args = {};

const ContentTemplate = (args) => (
    <Card { ...args }>
        <div>I am a test!</div>
    </Card>
);
export const WithContent = ContentTemplate.bind({});
WithContent.storyName = 'With Content';
WithContent.args = {};
