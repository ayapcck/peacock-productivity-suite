import styled from 'styled-components';

import {
    equalShadow,
} from '../styles';

const StyledPanel = styled.div`
    ${equalShadow}

    // Handle margin
    ${({ centered }) => centered && 'margin: auto;'}

    height: ${({ height, value }) => height ? `${value}%` : '100%'};
    width: ${({ height, value }) => !height ? `${value}%` : '100%'};
`;

export default StyledPanel;
