import React from 'react';

import { ROUTES } from '../../constants';
import { withPermissions } from '../../config/permissions';

const AdminPanel = () => {

    return (
        <div>
			Admin Panel
        </div>
    );
};

export default withPermissions(ROUTES.ADMIN_PANEL.permissions)(AdminPanel);
