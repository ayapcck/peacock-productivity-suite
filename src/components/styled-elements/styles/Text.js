import { css } from 'styled-components';

const textColor = css` color: ${({ theme, variant }) => theme.color[variant].text}; `;

export {
    textColor,
};
