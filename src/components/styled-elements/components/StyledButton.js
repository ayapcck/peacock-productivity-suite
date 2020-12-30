import styled from 'styled-components';

import {
    elementBackground,
    regularBorders,
} from '../styles';

const StyledButton = styled.button`
    ${elementBackground}
    ${regularBorders}
    box-shadow: 2px 2px ${({ theme, variant }) => theme.color[variant].altAccent};
    margin: 10px;
    padding: 2.5px 5px;

    &:active {
        box-shadow: 1px 1px ${({ theme, variant }) => theme.color[variant].altAccent};
        transform: translateY(1px) translateX(1px);
    }
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
    }
`;

export default StyledButton;
