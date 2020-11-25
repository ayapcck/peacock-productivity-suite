import { css } from 'styled-components';

const defaultBackground = css`
    background-color: ${({ theme }) => theme.backgroundColor};
`;

const elementBackground = css`
    background-color: ${({ theme }) => theme.accentColor};
`;

const overlayBackground = css`
    background-color: ${({ theme }) => theme.overlayColor};
`;

export {
    defaultBackground,
    elementBackground,
    overlayBackground,
};
