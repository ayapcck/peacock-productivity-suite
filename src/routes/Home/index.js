import React from 'react';

import { ROUTES } from '../../constants';
import { withPermissions } from '../../config/permissions';

const Home = () => {

    return (
        <div>
            Home
        </div>
    );
};

export default withPermissions(ROUTES.HOME.permissions)(Home);
