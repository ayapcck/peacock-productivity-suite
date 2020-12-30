import styled from 'styled-components';

import {
    borderStyle,
    defaultBackground,
    textColor,
} from '../styles';

const StyledTextBox = styled.input`
    ${defaultBackground}
    ${borderStyle}
    ${textColor}

    border-color: ${({ theme, valid, variant }) => valid
        ? theme.color[variant].accent
        : theme.color[variant].error };
    border-width: 0 0 2px 0;
    margin: 7.5px 5px;

    &:focus {
        outline: 0;
    }
    ::placeholder {
        ${textColor}
    }
`;

export default StyledTextBox;
