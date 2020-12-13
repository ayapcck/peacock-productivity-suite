import React from 'react';

import {
    PullRight,
} from '../../components/styled-elements';

const withPullRight = condition => Component =>
    props => condition
        ? (
            <PullRight>
                <Component {...props} />
            </PullRight>
        ) : (
            <Component {...props} />
        );

export default withPullRight;
