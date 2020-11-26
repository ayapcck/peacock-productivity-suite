import styled from 'styled-components';

import {
    borderRadius,
    borderStyle,
    hoverShadow,
    shadow,
} from '../styles';

const StyledCard = styled.div`
    ${hoverShadow}
    ${borderRadius}
    ${borderStyle}
    ${shadow}

    border-color: ${({ bordered, theme }) => bordered ? theme.accentColor : theme.backgroundColor};
    height: ${({ height }) => height };
    margin: 5px;
    transition: 0.3s;
    width: ${({ width }) => width };;
`;

export default StyledCard;
