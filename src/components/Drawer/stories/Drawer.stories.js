import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router';
import styled from 'styled-components';

import Drawer from '../index';

export default {
    title: 'Components/Drawer',
    component: Drawer,
    decorators: [withKnobs],
    argTypes: {
        
    },
};

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Template = (args) => (
    <MemoryRouter initialEntries={['/']}>
        <Container>
            <Drawer {...args} />
        </Container>
    </MemoryRouter>
);

export const Closed = Template.bind({});
Closed.args = {};

export const Open = Template.bind({});
Open.args = { startOpen: true };
