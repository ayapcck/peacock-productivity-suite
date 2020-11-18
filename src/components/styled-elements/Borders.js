import { css } from 'styled-components';

const borders = css`
    border-color: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    border-style: solid;
`;

export default borders;