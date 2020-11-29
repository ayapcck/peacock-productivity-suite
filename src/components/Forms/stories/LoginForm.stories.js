import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { LoginForm } from '../index';
import {
    Popup,
} from '../../molecules';

export default {
    title: 'Components/Forms/LoginForm',
    component: LoginForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <LoginForm {...args} />;
const TemplateInPopup = (args) => (
    <Popup tall>
        <LoginForm {...args} />
    </Popup>
);

export const Primary = Template.bind({});
Primary.args = {};

export const InPopup = TemplateInPopup.bind({});
InPopup.args = {};

