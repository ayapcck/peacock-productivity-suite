import React from 'react';
import { string } from 'prop-types';
import { withKnobs } from '@storybook/addon-knobs';
import {
    capitalize,
    keys,
} from 'lodash';

import Text from './Text';
import Wrapper from '../Wrapper';

export default {
    title: 'Atoms/Text',
    component: Text,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const createConfig = (type, size) => ({
    size,
    text: 'Test Text',
    type,
});

const configs = {
    body: [
        createConfig('body', 'small'),
        createConfig('body', 'medium'),
        createConfig('body', 'large'),
    ],
    titles: [
        createConfig('title', 'small'),
        createConfig('title', 'medium'),
        createConfig('title', 'large'),
    ],
};

const StoryTitle = ({ text }) => (
    <Text
        align="left"
        size="large"
        type="title"
        variant="secondary"
    >
        { capitalize(text) }
    </Text>
);
StoryTitle.propTypes = {
    text: string,
};

const Template = (args) => keys(configs).map((type, index) => {
    const sizes = configs[type];
    return (
        <Wrapper
            flexDirection="column"
            key={index}
            hasPadding
        >
            <StoryTitle text={type} />
            {
                sizes.map(({ text, ...rest }, sizeIndex) => (
                    <Text
                        key={sizeIndex}
                        { ...args }
                        { ...rest }
                    >
                        { text }
                    </Text>
                ))
            }
        </Wrapper>
    );
});

export const Primary = Template.bind({});
Primary.args = {};
