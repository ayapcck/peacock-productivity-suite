import React from 'react';
import { string } from 'prop-types';
import { withKnobs } from '@storybook/addon-knobs';

import Text from '.';
import {
    capitalize,
    keys,
} from 'lodash';

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
        colorOverride="cyan"
        size="large"
        text={capitalize(text)}
        type="title"
    />
);
StoryTitle.propTypes = {
    text: string,
};

const Template = (args) => keys(configs).map((type, index) => {
    const sizes = configs[type];
    return (
        <div key={index}>
            <StoryTitle text={type} />
            {sizes.map((config, sizeIndex) => (
                <Text
                    key={sizeIndex}
                    { ...args }
                    { ...config }
                />
            ))}
        </div>
    );
});

export const Primary = Template.bind({});
Primary.args = {};
