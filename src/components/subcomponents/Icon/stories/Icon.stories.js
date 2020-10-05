import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'lodash';

import Icon from '../index';

export default {
    title: 'Subcomponents/Icon',
    component: Icon,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => (
    <div style={{ padding: '10px' }}>
        <Icon {...args} />
    </div>
);



export const Bars = Template.bind({});
export const TimesCircle = Template.bind({});

const icons = {
    bars: {
        iconText: 'bars',
        name: 'Bars',
        story: Bars,
    },
    timesCircle: {
        iconText: [ 'far', 'times-circle' ],
        name: 'Times Circle',
        story: TimesCircle,
    },
};

_.forIn(icons, (icon) => {
    const { iconText, name, story } = icon;
    story.args = {
        icon: iconText,
    };
    story.storyName = name;
});
