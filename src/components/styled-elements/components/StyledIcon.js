import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

export default StyledIcon;
