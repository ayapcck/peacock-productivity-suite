import React from 'react';
import { MemoryRouter } from 'react-router';
import { withKnobs } from '@storybook/addon-knobs';

import { AuthUserContext } from '../../../config/session';
import Navigation from '../index';

import {
    AdminAuthUser,
    GuestAuthUser,
} from '../../../__mocks__/Users';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    decorators: [ withKnobs ],
    argTypes: {
        
    },
};

const Template = (args) => (
    <AuthUserContext.Provider value={args.authUser}>
        <MemoryRouter initialEntries={[ '/' ]}>
            <Navigation {...args} />
        </MemoryRouter>
    </AuthUserContext.Provider>
);

export const Authorized = Template.bind({});
Authorized.args = {
    authUser: AdminAuthUser,
};

export const NotAuthorized = Template.bind({});
NotAuthorized.args = {
    authUser: GuestAuthUser,
};
