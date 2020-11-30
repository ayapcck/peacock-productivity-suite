import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import forIn from 'lodash/forIn';

import Icon from '.';

export default {
    title: 'Atoms/Icon',
    component: Icon,
    decorators: [ withKnobs ],
    argTypes: {
        onClick: { defaultValue: null },
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

forIn(icons, (icon) => {
    const { iconText, name, story } = icon;
    story.args = {
        icon: iconText,
    };
    story.storyName = name;
});
