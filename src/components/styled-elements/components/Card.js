import styled from 'styled-components';

import {
    hoverShadow,
    regularBorders,
    shadow,
} from '../styles';

const StyledCard = styled.div`
    ${hoverShadow}
    ${regularBorders}
    ${shadow}

    height: ${({ height }) => height };
    margin: 5px;
    transition: 0.3s;
    width: ${({ width }) => width };;
`;

export default StyledCard;
