import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    array,
    bool,
    func,
    oneOfType,
    string,
} from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};

    ${({ centered }) => centered && 'margin: auto;'}

    &:hover {
        cursor: pointer;
    }
`;

const Icon = (props) => {
    const {
        ...passThrough
    } = props;

    return (
        <StyledIcon
            { ...passThrough }
        />
    );
};

Icon.defaultProps = {
    centered: false,
    className: '',
    icon: 'bars',
    onClick: () => null,
};

Icon.propTypes = {
    centered: bool,
    className: string,
    icon: oneOfType([ string, array ]),
    onClick: func,
};

export default Icon;
