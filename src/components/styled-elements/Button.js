import styled from 'styled-components';

import borders from './Borders';

const StyledButton = styled.button`
    ${borders}
    background-color: ${({ theme }) => theme.accentColor};
    /* border-color: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    border-style: solid; */
    box-shadow: 2px 2px ${({ theme }) => theme.altAccentColor};
    margin: 10px;
    padding: 2.5px 5px;

    &:active {
        box-shadow: 1px 1px ${({ theme }) => theme.altAccentColor};
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
