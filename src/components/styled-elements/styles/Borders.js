import { css } from 'styled-components';

import { getThemeColor } from '../helpers';

const borderColor = css` border-color: ${({ theme, variant }) => theme.color[variant].accent}; `;
const borderRadius = css` border-radius: ${({ theme }) => theme.border.radius}; `;
const borderStyle = css` border-style: ${({ theme }) => theme.border.style}; `;
const borderWidth = css` border-width: ${({ theme }) => theme.border.width}; `;

const customBorderSides = (color = 'accent') => css`
    border-color: ${({ borders, ...rest }) => borders === 'all'
        ? getThemeColor(color, rest)
        : getThemeColor('background', rest)};
    ${({ borders }) => borders !== 'none' && borderStyle}
    ${({ borders }) => borders !== 'none' && borderWidth}
    ${({ bottomBorder, ...rest }) => bottomBorder
        && `border-bottom-color: ${getThemeColor(color, rest)};`}
    ${({ leftBorder, ...rest }) => leftBorder
        && `border-left-color: ${getThemeColor(color, rest)};`}
    ${({ rightBorder, ...rest }) => rightBorder
        && `border-right-color: ${getThemeColor(color, rest)};`}
    ${({ topBorder, ...rest }) => topBorder
        && `border-top-color: ${getThemeColor(color, rest)};`}
`;

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
    customBorderSides,
    regularBorders,
};
