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

    border-color: ${({ borders, theme, variant }) => borders === 'all' ? theme.color[variant].accent : theme.color[variant].background};
    ${({ bottomBorder, theme, variant }) => bottomBorder && `border-bottom-color: ${theme.color[variant].accent};`}
    ${({ leftBorder, theme, variant }) => leftBorder && `border-left-color: ${theme.color[variant].accent};`}
    ${({ rightBorder, theme, variant }) => rightBorder && `border-right-color: ${theme.color[variant].accent};`}
    ${({ topBorder, theme, variant }) => topBorder && `border-top-color: ${theme.color[variant].accent};`}

    height: ${({ isHeight, value }) => isHeight ? `${value}%` : '100%'};
    padding: 5px;
    transition: 0.3s;
    width: ${({ isHeight, value }) => !isHeight ? `${value}%` : '100%'};

    // Overwrite styles
    ${({ styles }) => styles}
`;

export default StyledPanel;
