import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ChangePasswordForm } from '../index';
import Popup from '../../Popup';

export default {
    title: 'Components/Forms/ChangePasswordForm',
    component: ChangePasswordForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <ChangePasswordForm {...args} />;
const TemplateInPopup = (args) => 
    <Popup closePopup={() => null} popupContent={<ChangePasswordForm {...args} />} />;

export const Primary = Template.bind({});
Primary.args = {};

export const InPopup = TemplateInPopup.bind({});
Primary.args = {};
