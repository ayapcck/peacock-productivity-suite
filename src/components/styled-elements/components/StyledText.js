import styled from 'styled-components';

const StyledText = styled.h1`
    color: ${({ theme, variant }) => theme.color[variant].text};
    margin: 0;
    text-align: ${({ align }) => align};
`;

export default StyledText;
