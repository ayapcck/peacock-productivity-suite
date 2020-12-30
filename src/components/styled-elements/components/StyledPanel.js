import styled from 'styled-components';

import {
    borderBox,
    customBorderSides,
    equalShadow,
} from '../styles';

const StyledPanel = styled.div`
    ${borderBox}
    ${customBorderSides}
    ${equalShadow}

    ${({ centered }) => centered && 'margin: auto;'}

    height: ${({ isHeight, value }) => isHeight ? `${value}%` : '100%'};
    padding: 5px;
    transition: 0.3s;
    width: ${({ isHeight, value }) => !isHeight ? `${value}%` : '100%'};

    // Overwrite styles
    ${({ styles }) => styles}
`;

export default StyledPanel;
