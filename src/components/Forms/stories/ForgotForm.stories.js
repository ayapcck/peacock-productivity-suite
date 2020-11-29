import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ForgotForm } from '../index';
import {
    Popup,
} from '../../molecules';

export default {
    title: 'Components/Forms/ForgotForm',
    component: ForgotForm,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => <ForgotForm {...args} />;
const TemplateInPopup = (args) => (
    <Popup tall>
        <ForgotForm {...args} />
    </Popup>
);

export const Primary = Template.bind({});
Primary.args = {};

export const InPopup = TemplateInPopup.bind({});
InPopup.args = {};
