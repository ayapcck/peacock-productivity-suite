import { css } from 'styled-components';

const createShadow = (hOffset, vOffset, blur, spread) => css`
    box-shadow: ${hOffset} ${vOffset} ${blur} ${spread} ${({ theme, variant }) => theme.color[variant].shadow};
`;

const bigShadow = createShadow(0, '8px', '16px', 0);
const equalShadow = createShadow(0, 0, '8px', 0);
const mediumShadow = createShadow(0, '4px', '8px', 0);
const smallShadow = createShadow(0, '2px', '4px', 0);

export {
    bigShadow,
    equalShadow,
    mediumShadow,
    smallShadow,
};
