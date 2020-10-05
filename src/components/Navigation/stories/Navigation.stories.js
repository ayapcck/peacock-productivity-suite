import React from 'react';
import { MemoryRouter } from 'react-router';
import { withKnobs } from '@storybook/addon-knobs';

import { AuthUserContext } from '../../../config/session';
import Navigation from '../index';

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
    authUser: {},
};

export const NotAuthorized = Template.bind({});
NotAuthorized.args = {};
