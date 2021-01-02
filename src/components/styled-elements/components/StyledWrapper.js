import styled from 'styled-components';

import {
    customBorderSides,
    customMargins,
} from '../styles';

const handleFlexValue = val =>
    val === 'end' || val === 'start'
        ? `flex-${val}`
        : val;

const handlePosition = val => typeof val === 'string'
    ? val
    : `${val}px`;

const StyledWrapper = styled.div`
    ${customBorderSides()}
    ${customMargins}
    
    ${({ hasPadding, theme: { padding } }) => hasPadding && `padding: ${padding};`}
    
    align-items: ${({ align, centered }) => centered ? 'center' : handleFlexValue(align)};
    bottom: ${({ bottom }) => handlePosition(bottom)};
    box-sizing: border-box;
    display: flex;
    flex: ${({ value }) => value};
    flex-direction: ${({ flexDirection }) => flexDirection};
    justify-content: ${({ centered, justify }) => centered ? 'center' : handleFlexValue(justify)};
    left: ${({ left }) => handlePosition(left)};
    position: ${({ position }) => position};
    right: ${({ right }) => handlePosition(right)};
    top: ${({ top }) => handlePosition(top)};
    transition: 0.3s;

    ${({ forceMaxContent }) => forceMaxContent && `
        height: 100%;
        width: 100%;
    `}
`;

export default StyledWrapper;
