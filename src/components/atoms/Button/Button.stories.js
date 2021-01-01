import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { withLightTheme } from '../../../logics';

import Button from './Button';
import Wrapper from '../Wrapper';

export default {
    title: 'Molecules/Button',
    component: Button,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const LightButton = withLightTheme(Button);

const variants = [ 'primary', 'secondary', 'tertiary' ];

const DemoTemplate = (args) => (
    <Wrapper flexDirection="column">
        <Wrapper flexDirection="row">
            {
                variants.map((variant, i) => (
                    <Button
                        { ...args }
                        key={i}
                        variant={variant}
                    />
                ))
            }
        </Wrapper>
        <Wrapper flexDirection="row">
            {
                variants.map((variant, i) => (
                    <LightButton
                        { ...args }
                        key={i}
                        variant={variant}
                    />
                ))
            }
        </Wrapper>
    </Wrapper>
);

export const Demo = DemoTemplate.bind({});
Demo.args = {
    text: 'Test Button',
};
