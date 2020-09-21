import React from 'react';

import Popup from '../../Popup';
import RegisterForm from '../index';

export default {
    title: 'Components/RegisterForm',
    component: RegisterForm,
    argTypes: {
        
    },
};

const Template = (args) => <RegisterForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const TemplateInPopup = (args) => <Popup popupContent={<RegisterForm {...args} />} />;

export const InPopup = TemplateInPopup.bind({});
InPopup.args = {};