import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import NavLink from './NavLink';
import runCommonTests from '../../../../test/commonTests';

const history = createMemoryHistory();

const Container = () => (
    <Router history={history}>
        <NavLink />
    </Router>
);

runCommonTests(Container);
