import styled from 'styled-components';

import {
    overlayBackground,
} from '../styles';

const StyledOverlay = styled.div`
    ${overlayBackground}

    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
`;

export default StyledOverlay;
