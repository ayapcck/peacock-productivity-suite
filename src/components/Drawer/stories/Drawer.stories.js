import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router';
import styled from 'styled-components';

import { AuthUserContext } from '../../../config/session';
import Drawer from '../index';

import {
    AdminAuthUser,
    GuestAuthUser,
} from '../../../__mocks__/Users';

export default {
    title: 'Components/Drawer',
    component: Drawer,
    decorators: [ withKnobs ],
    argTypes: {

    },
};

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Template = (args) => (
    <AuthUserContext.Provider value={args.authUser}>
        <MemoryRouter initialEntries={[ '/' ]}>
            <Container>
                <Drawer {...args} />
            </Container>
        </MemoryRouter>
    </AuthUserContext.Provider>
);

export const Closed = Template.bind({});
Closed.args = {};

export const Open = Template.bind({});
Open.args = {
    authUser: GuestAuthUser,
    startOpen: true,
};

export const OpenAuthorized = Template.bind({});
OpenAuthorized.args = {
    authUser: AdminAuthUser,
    startOpen: true,
};
