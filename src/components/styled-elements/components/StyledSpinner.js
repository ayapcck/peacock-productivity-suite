import styled, {
    keyframes,
} from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const sizeMapping = {
    large: '40px',
    medium: '20px',
    small: '10px',
};

const StyledSpinner = styled.div`
    animation: ${spin} 1s linear infinite;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top: 4px solid ${({ theme, variant }) => theme.color[variant].spinner};;
    
    ${({ size }) => `
        height: ${sizeMapping[size]};
        width: ${sizeMapping[size]};
    `}
`;

export default StyledSpinner;
