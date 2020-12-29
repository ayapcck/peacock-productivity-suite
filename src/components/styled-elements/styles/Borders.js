import { css } from 'styled-components';

import { getThemeColor } from '../helpers';

const borderColor = css` border-color: ${({ theme, variant }) => theme.color[variant].accent}; `;
const borderRadius = css` border-radius: ${({ theme }) => theme.border.radius}; `;
const borderStyle = css` border-style: ${({ theme }) => theme.border.style}; `;
const borderWidth = css` border-width: ${({ theme }) => theme.border.width}; `;

const customBorderSides = css`
    ${({ borders }) => borders !== 'none' && borderStyle}
    ${({ borders }) => borders !== 'none' && borderWidth}
    ${({ borders, ...rest }) => borders !== 'none' && `border-color: ${getThemeColor('accent', rest)};`}
    ${({ bottomBorder, ...rest }) => bottomBorder && `border-bottom-color: ${getThemeColor('accent', rest)};`}
    ${({ leftBorder, ...rest }) => leftBorder && `border-left-color: ${getThemeColor('accent', rest)};`}
    ${({ rightBorder, ...rest }) => rightBorder && `border-right-color: ${getThemeColor('accent', rest)};`}
    ${({ topBorder, ...rest }) => topBorder && `border-top-color: ${getThemeColor('accent', rest)};`}
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
