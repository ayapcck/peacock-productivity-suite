import { css } from 'styled-components';

const borderColor = css` border-color: ${({ theme }) => theme.accentColor}; `;
const borderRadius = css` border-radius: ${({ theme }) => theme.border.radius}; `;
const borderStyle = css` border-style: ${({ theme }) => theme.border.style}; `;
const borderWidth = css` border-width: ${({ theme }) => theme.border.width}; `;

const regularBorders = css`
    ${borderColor}
    ${borderRadius}
    ${borderStyle}
`;

export {
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    regularBorders,
};
