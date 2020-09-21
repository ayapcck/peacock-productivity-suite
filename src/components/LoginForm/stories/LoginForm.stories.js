import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import LoginForm from '../index';
import Popup from '../../Popup';

export default {
    title: 'Components/LoginForm',
    component: LoginForm,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const TemplateInPopup = (args) => <Popup popupContent={<LoginForm {...args} />} />;

export const InPopup = TemplateInPopup.bind({});
InPopup.args = {};