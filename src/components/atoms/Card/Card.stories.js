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

const customHeights = [ '25%', '50%', '75%', '90%' ];
const Cards = cardProps =>
    customHeights.map((height, i) => (
        <Card
            { ...cardProps }
            height={height}
            key={i}
        />
    ));
const MultiCardTemplate = (args) => <Cards { ...args } />;

export const Primary = Template.bind({});
Primary.args = {};

export const CustomHeights = MultiCardTemplate.bind({});
CustomHeights.storyName = 'Custom Heights';
CustomHeights.args = {};

const ContentTemplate = (args) => (
    <Card { ...args }>
        <div>I am a test!</div>
    </Card>
);
export const WithContent = ContentTemplate.bind({});
WithContent.storyName = 'With Content';
WithContent.args = {};
