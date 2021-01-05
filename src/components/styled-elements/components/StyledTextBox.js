import styled from 'styled-components';

import {
    borderStyle,
    customBorderSides,
    defaultBackground,
    textColor,
} from '../styles';

const StyledTextBox = styled.input`
    ${borderStyle}
    ${defaultBackground}
    ${textColor}

    ${({ valid }) => customBorderSides(valid ? 'accent' : 'error')}
    flex: 1;

    &:focus {
        outline: 0;
    }
    ::placeholder {
        ${textColor}
    }
`;

export default StyledTextBox;
