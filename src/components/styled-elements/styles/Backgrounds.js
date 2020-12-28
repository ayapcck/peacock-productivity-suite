import { css } from 'styled-components';

const defaultBackground = css` background-color: ${({ theme, variant }) => theme.color[variant].background}; `;
const elementBackground = css` background-color: ${({ theme, variant }) => theme.color[variant].accent}; `;
const overlayBackground = css` background-color: ${({ theme, variant }) => theme.color[variant].overlay}; `;

export {
    defaultBackground,
    elementBackground,
    overlayBackground,
};
