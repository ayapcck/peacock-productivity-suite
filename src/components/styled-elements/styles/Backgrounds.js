import { css } from 'styled-components';

const defaultBackground = css`
    background-color: ${({ theme }) => theme.backgroundColor};
`;

const elementBackground = css`
    background-color: ${({ theme }) => theme.accentColor};
`;

export {
    defaultBackground,
    elementBackground,
};
