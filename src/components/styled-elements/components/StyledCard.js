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
    flex: ${({ value }) => value};
    margin: 5px;
    position: relative;
    transition: 0.3s;
`;

export default StyledCard;
