import React from 'react';

import { withLightTheme } from '../../../logics';

import Button from './Button';
import Wrapper from '../Wrapper';

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
