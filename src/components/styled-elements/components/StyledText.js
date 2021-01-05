import styled from 'styled-components';

const StyledText = styled.h1`
    ${({ align }) => align && `text-align: ${ align };`}

    color: ${({ theme, variant }) => theme.color[variant].text};
    margin: 0;
`;

export default StyledText;
