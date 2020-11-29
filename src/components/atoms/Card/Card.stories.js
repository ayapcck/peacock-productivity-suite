import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { withPaddedWrapper } from '../../../logics';

import Card from '.';

export default {
    title: 'Atoms/Card',
    component: Card,
    decorators: [ withKnobs ],
    argTypes: {},
};

const Template = withPaddedWrapper(Card);

const customHeights = [ '25%', '50%', '75%', '90%' ];
const Cards = cardProps => 
    customHeights.map((height, i) => <Card { ...cardProps } height={height} key={i} />);
const MultiCardTemplate = withPaddedWrapper((args) => <><Cards { ...args } /></>);

export const Primary = Template.bind({});
Primary.args = {};

export const CustomHeights = MultiCardTemplate.bind({});
CustomHeights.storyName = 'Custom Heights';
CustomHeights.args = {};

const ContentCard = (args) => (
    <Card { ...args }>
        <div>I am a test!</div>
    </Card>
);
const ContentTemplate = withPaddedWrapper(ContentCard);
export const WithContent = ContentTemplate.bind({});
WithContent.storyName = 'With Content';
WithContent.args = {};
