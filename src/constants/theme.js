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
};

const sharedStyles = {
    border,
}

const themeCreator = new ThemeCreator(sharedStyles);
themeCreator.addColors('accentColor', lightBlue, lightGreen);
themeCreator.addColors('altAccentColor', darkBlue, darkGreen);
themeCreator.addColors('backgroundColor', darkGrey, white);
themeCreator.addColors('errorColor', red, red);
themeCreator.addColors('hoverColor', white, black);
themeCreator.addColors('menuSelected', white, black);
themeCreator.addColors('menuTextSelected', black, white);
themeCreator.addColors('overlayColor', white, darkGrey);
themeCreator.addColors('shadowColor', black, black);
themeCreator.addColors('textColor', white, black);

export const DarkTheme = themeCreator.getDarkTheme();
export const LightTheme = themeCreator.getLightTheme();
