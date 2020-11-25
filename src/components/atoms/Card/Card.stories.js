import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { withPaddedWrapper } from '../../../logics';

import Card from '.';

export default {
    title: 'Atoms/Card',
    component: Card,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = withPaddedWrapper(Card);

const customHeights = [ '25%', '50%', '75%', '90%' ];
const cards = customHeights.map((height, i) => <Card height={height} key={i} />);
const MultiCardTemplate = withPaddedWrapper(() => <>{cards}</>);

export const Primary = Template.bind({});
Primary.args = {};

export const CustomHeights = MultiCardTemplate.bind({});
CustomHeights.storyName = 'Custom Heights';
