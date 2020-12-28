import styled from 'styled-components';

import {
    borderRadius,
    borderStyle,
    defaultBackground,
    hoverShadow,
    shadow,
} from '../styles';

const StyledCard = styled.div`
    ${borderRadius}
    ${borderStyle}
    ${defaultBackground}

    ${({ clickable }) => clickable && `
        &:hover {
            cursor: pointer;
        }
    `}
    ${({ hasHoverShadow }) => hasHoverShadow && hoverShadow}
    ${({ hasShadow }) => hasShadow && shadow}

    border-color: ${({ hasBorders, theme, variant }) => hasBorders
        ? theme.color[variant].accent
        : theme.color[variant].background};
    flex: ${({ value }) => value};
    margin: 5px;
    position: relative;
    transition: 0.3s;
`;

export default StyledCard;
