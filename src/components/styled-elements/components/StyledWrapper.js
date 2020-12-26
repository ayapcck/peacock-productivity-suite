import styled from 'styled-components';

const wrapFlex = val => val === 'center' ? val : `flex-${val}`;

const StyledWrapper = styled.div`
    ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
    ${({ hasPadding, theme: { padding } }) => hasPadding && `padding: ${padding};`}
    
    align-items: ${({ align, centered }) => centered ? 'center' : wrapFlex(align)};
    box-sizing: border-box;
    display: flex;
    flex: ${({ value }) => value};
    justify-content: ${({ centered, justify }) => centered ? 'center' : wrapFlex(justify)};
`;

export default StyledWrapper;
