import ThemeCreator from '../utilities/themeCreator';

// Blues
const darkBlue = '#188aa1';
const lightBlue = '#1ebad9';

// Greens
const darkGreen = '#5b8654';
const lightGreen = '#c3ffb9';

// Black/White/Greys
const black = '#000000';
const darkGrey = '#5b5b5b';
const white = '#ffffff';

// Reds
const red = '#f34b4b';

// Borders
const border = {
    radius: '5px',
    style: 'solid',
    width: '2px',
};

const sharedStyles = {
    border,
    margin: '10px',
    padding: '10px',
};

const themeCreator = new ThemeCreator(sharedStyles);
themeCreator.addColor(
    'accent',
    [ lightBlue, lightBlue, lightBlue ],
    [ lightGreen, lightGreen, lightGreen ]
);
themeCreator.addColor(
    'altAccent',
    [ darkBlue, darkBlue, darkBlue ],
    [ darkGreen, darkGreen, darkGreen ]
);
themeCreator.addColor(
    'background',
    [ darkGrey, darkGrey, darkGrey ],
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
    [ darkGrey, darkGrey, darkGrey ]
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

export const DarkTheme = themeCreator.getDarkTheme();
export const LightTheme = themeCreator.getLightTheme();
