import { css } from 'styled-components';

const equalShadow = css` box-shadow: 0 0 8px 0 ${({ theme }) => theme.shadowColor}; `;
const shadow = css` box-shadow: 0 4px 8px 0 ${({ theme }) => theme.shadowColor}; `;

const hoverShadow = css`
    &:hover {
        box-shadow: 0 8px 16px 0 ${({ theme }) => theme.shadowColor};
    }
`;

export {
    equalShadow,
    hoverShadow,
    shadow,
};
