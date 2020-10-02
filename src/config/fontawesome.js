import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import _ from 'lodash';

const icons = [
    far,
    faBars,
    faTimesCircle,
];

export const addIcons = () => 
    _.each(icons, (icon) => library.add(icon));
