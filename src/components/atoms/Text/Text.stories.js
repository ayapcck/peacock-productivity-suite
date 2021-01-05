import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Text from './Text';
import Wrapper from '../Wrapper';

export default {
    title: 'Atoms/Text',
    component: Text,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const configs = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
];

const Template = (args) => (
    <Wrapper
        flexDirection="column"
        padding="standard"
    >
        {
            configs.map((type, i) => (
                <Text
                    { ...args }
                    key={i}
                    type={type}
                >
                    Test Text
                </Text>
            ))
        }
    </Wrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
