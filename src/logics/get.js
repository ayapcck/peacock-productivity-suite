import mapValues from 'lodash/mapValues';

import {
    BORDER_SIDES,
    MARGIN_SIDES,
} from '../constants';

const getUsedBorderSides = borders => mapValues(BORDER_SIDES, side => borders.includes(side));
const getUsedMarginSides = margins => mapValues(MARGIN_SIDES, side => margins.includes(side));

export {
    getUsedBorderSides,
    getUsedMarginSides,
};
