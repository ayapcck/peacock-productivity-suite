import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const addIcons = () => 
    library.add(far, faBars, faTimesCircle);