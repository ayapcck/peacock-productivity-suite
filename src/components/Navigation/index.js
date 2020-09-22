import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthControl from '../AuthControl';

import * as ROUTES from '../../constants/routes';

const ShowLogin = styled.span`
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const Navigation = () => {
    const [ showAuthControl, setShowAuthControl ] = useState(false);

    const hideAuthControl = () => setShowAuthControl(false);
    const displayAuthControl = () => setShowAuthControl(true);
    // TODO: This might not be the best place for showing/hiding auth control
    // we need to be able to close it from the popup component, which is created in AuthControl
    // so we'd need to pass through two components

    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <ShowLogin onClick={displayAuthControl}>Login</ShowLogin>
                </li>
            </ul>
            { showAuthControl && <AuthControl handleClose={hideAuthControl} /> }
        </div>
    );
};

export default Navigation;