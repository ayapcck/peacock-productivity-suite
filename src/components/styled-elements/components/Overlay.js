import styled from 'styled-components';

import {
    overlayBackground,
} from '../styles';

const StyledOverlay = styled.div`
    ${overlayBackground}

    height: 100%;
    opacity: 0.5;
    position: absolute;
    width: 100%;
`;

export default StyledOverlay;
