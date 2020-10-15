import React from 'react';

import { ROUTES } from '../../constants';
import { withPermissions } from '../../config/permissions';

const HomePage = () => {

    return (
        <div>
            Home
        </div>
    );
};

export default withPermissions(ROUTES.HOME.permissions)(HomePage);
