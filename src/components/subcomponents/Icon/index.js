import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { string, func } from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const Icon = (props) => {
    const { 
        className,
        icon, 
        onClick
    } = props;
    
    return (
        <StyledIcon 
            className={className}
            icon={icon}
            onClick={onClick}
        />
    );
};

Icon.defaultProps = {
    icon: 'bars',
    onClick: () => null,
};

Icon.propTypes = {
    icon: string,
    onClick: func
};

export default Icon;
