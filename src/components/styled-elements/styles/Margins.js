import { css } from 'styled-components';

const customMargins = css`
    ${({ margins, theme }) => margins === 'all' && `margin: ${theme.margin.big};`}
    ${({ bottomMargin, theme }) => bottomMargin && `margin-bottom: ${theme.margin.big};`}
    ${({ leftMargin, theme }) => leftMargin && `margin-left: ${theme.margin.big};`}
    ${({ rightMargin, theme }) => rightMargin && `margin-right: ${theme.margin.big};`}
    ${({ topMargin, theme }) => topMargin && `margin-top: ${theme.margin.big};`}
`;

export {
    customMargins,
};
