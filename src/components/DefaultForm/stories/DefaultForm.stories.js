import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import DefaultForm from '../index';

import TextBox from '../../subcomponents/TextBox';

export default {
    title: 'Components/DefaultForm',
    component: DefaultForm,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => <DefaultForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <TextBox placeHolder="Test" />
};