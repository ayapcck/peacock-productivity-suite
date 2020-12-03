import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Panel from '.';

export default {
    title: 'Atoms/Panel',
    component: Panel,
    decorators: [ withKnobs ],
    argTypes: {
        borders: {
            control: {
                type: 'select',
                options: [
                    'all',
                    'none',
                    [ 'left' ],
                    [ 'left', 'right' ],
                    [ 'left', 'right', 'top' ],
                    [ 'left', 'right', 'top', 'bottom' ],
                ],
            },
        },
    },
};

const Template = (args) => <Panel {...args}>Test Content</Panel>;
const CenterPanelTemplate = (args) => (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <Panel { ...args }>Test Content</Panel>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const CenterPanel = CenterPanelTemplate.bind({});
CenterPanel.args = {
    centered: true,
    position: 'width',
    value: 50,
};
