import { css } from 'styled-components';

const equalShadow = css` box-shadow: 0 0 8px 0 ${({ theme, variant }) => theme.color[variant].shadow}; `;
const shadow = css` box-shadow: 0 4px 8px 0 ${({ theme, variant }) => theme.color[variant].shadow}; `;

const hoverShadow = css`
    &:hover {
        box-shadow: 0 8px 16px 0 ${({ theme, variant }) => theme.color[variant].shadow};
    }
`;

export {
    equalShadow,
    hoverShadow,
    shadow,
};
