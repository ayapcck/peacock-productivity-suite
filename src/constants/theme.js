import ThemeCreator from '../utilities/themeCreator';

// Blues
const darkBlue = '#188aa1';
const lightBlue = '#1ebad9';

// Greens
const darkGreen = '#5b8654';
const lightGreen = '#c3ffb9';

// Black/White/Greys
const black = '#000000';
const grey1 = '#b3b3b3';
const grey2 = '#5b5b5b';
const grey3 = '#232323';
const white = '#ffffff';

// Reds
const red = '#f34b4b';

// Misc
const border = {
    radius: '5px',
    style: 'solid',
    width: '2px',
};
const margin = {
    big: '20px',
    standard: '10px',
};

const sharedStyles = {
    border,
    margin,
    padding: '10px',
};

const themeCreator = new ThemeCreator(sharedStyles);
themeCreator.addColor(
    'accent',
    [ lightBlue, grey1, lightBlue ],
    [ lightGreen, lightGreen, lightGreen ]
);
themeCreator.addColor(
    'altAccent',
    [ darkBlue, grey3, darkBlue ],
    [ darkGreen, darkGreen, darkGreen ]
);
themeCreator.addColor(
    'background',
    [ grey2, white, grey2 ],
    [ white, white, white ]
);
themeCreator.addColor(
    'error',
    [ red, red, red ],
    [ red, red, red ]
);
themeCreator.addColor(
    'hover',
    [ white, white, white ],
    [ black, black, black ]
);
themeCreator.addColor(
    'menuSelected',
    [ white, white, white ],
    [ black, black, black ]
);
themeCreator.addColor(
    'menuTextSelected',
    [ black, black, black ],
    [ white, white, white ]
);
themeCreator.addColor(
    'overlay',
    [ white, white, white ],
    [ grey2, grey2, grey2 ]
);
themeCreator.addColor(
    'shadow',
    [ black, black, black ],
    [ black, black, black ]
);
themeCreator.addColor(
    'text',
    [ white, lightBlue, white ],
    [ black, black, black ]
);

export const DARK_THEME = themeCreator.getDarkTheme();
export const LIGHT_THEME = themeCreator.getLightTheme();
