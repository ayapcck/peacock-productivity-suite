import styled from 'styled-components';

const handleFlexValue = val =>
    val === 'center' || val === 'unset'
        ? val
        : `flex-${val}`;

const handlePosition = val => typeof val === 'string'
    ? val
    : `${val}px`;

const StyledWrapper = styled.div`
    ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
    ${({ hasPadding, theme: { padding } }) => hasPadding && `padding: ${padding};`}
    
    align-items: ${({ align, centered }) => centered ? 'center' : handleFlexValue(align)};
    bottom: ${({ bottom }) => handlePosition(bottom)};
    box-sizing: border-box;
    display: flex;
    flex: ${({ value }) => value};
    justify-content: ${({ centered, justify }) => centered ? 'center' : handleFlexValue(justify)};
    left: ${({ left }) => handlePosition(left)};
    position: ${({ position }) => position};
    right: ${({ right }) => handlePosition(right)};
    top: ${({ top }) => handlePosition(top)};
`;

export default StyledWrapper;
