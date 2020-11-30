import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    array,
    func,
    oneOfType,
    string,
} from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};
    margin: 5px;

    &:hover {
        cursor: pointer;
    }
`;

const Icon = (props) => {
    const {
        className,
        icon,
        onClick,
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
    className: string,
    icon: oneOfType([ string, array ]),
    onClick: func,
};

export default Icon;
