import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { RegisterForm } from '../index';
import {
    Popup,
} from '../../molecules';

export default {
    title: 'Components/Forms/RegisterForm',
    component: RegisterForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <RegisterForm {...args} />;
const TemplateInPopup = (args) => (
    <Popup tall>
        <RegisterForm {...args} />
    </Popup>
);

export const Primary = Template.bind({});
Primary.args = {};

export const InPopup = TemplateInPopup.bind({});
InPopup.args = {};

