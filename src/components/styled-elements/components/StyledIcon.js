import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme, variant }) => theme.color[variant].text};

    &:hover {
        cursor: pointer;
    }
`;

export default StyledIcon;
