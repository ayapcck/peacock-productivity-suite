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
    ${hoverShadow}
    ${shadow}

    border-color: ${({ bordered, theme }) => bordered ? theme.accentColor : theme.backgroundColor};
    height: ${({ height }) => height };
    margin: 5px;
    position: relative;
    transition: 0.3s;
    width: ${({ width }) => width };
`;

export default StyledCard;
