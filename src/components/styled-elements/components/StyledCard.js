import styled from 'styled-components';

import {
    borderRadius,
    borderStyle,
    defaultBackground,
    mediumShadow,
    smallShadow,
} from '../styles';

const StyledCard = styled.div`
    ${borderRadius}
    ${borderStyle}
    ${defaultBackground}

    ${({ hasShadow }) => hasShadow && mediumShadow}

    border-color: ${({ hasBorders, theme, variant }) => hasBorders
        ? theme.color[variant].accent
        : theme.color[variant].background};
    flex: ${({ value }) => value};
    margin: 5px;
    position: relative;
    transition: 0.3s;

    &:hover {
        ${({ clickable }) => clickable && 'cursor: pointer;'}
        ${({ hasHoverShadow }) => hasHoverShadow && smallShadow}
    }
`;

export default StyledCard;
