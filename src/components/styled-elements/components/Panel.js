import styled from 'styled-components';

import {
    borderBox,
    borderStyle,
    borderWidth,
    equalShadow,
} from '../styles';

const StyledPanel = styled.div`
    ${borderBox}
    ${borderStyle}
    ${borderWidth}
    ${equalShadow}

    ${({ centered }) => centered && 'margin: auto;'}

    border-color: ${({ borders, theme }) => borders === 'all' ? theme.accentColor : theme.backgroundColor};
    ${({ bottomBorder, theme }) => bottomBorder && `border-bottom-color: ${theme.accentColor};`}
    ${({ leftBorder, theme }) => leftBorder && `border-left-color: ${theme.accentColor};`}
    ${({ rightBorder, theme }) => rightBorder && `border-right-color: ${theme.accentColor};`}
    ${({ topBorder, theme }) => topBorder && `border-top-color: ${theme.accentColor};`}

    height: ${({ isHeight, value }) => isHeight ? `${value}%` : '100%'};
    padding: 5px;
    transition: 0.3s;
    width: ${({ isHeight, value }) => !isHeight ? `${value}%` : '100%'};

    // Overwrite styles
    ${({ styles }) => styles}
`;

export default StyledPanel;
