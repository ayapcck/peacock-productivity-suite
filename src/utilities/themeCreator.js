import merge from 'lodash/merge';

const getInitialTheme = sharedStyles => ({
    ...sharedStyles,
    color: {
        primary: {

        },
        secondary: {

        },
        tertiary: {

        },
    },
});

const makeColor = (colorName, colorValue) => ({
    [colorName]: colorValue,
});

export default class ThemeCreator {
    constructor(sharedStyles) {
        this.darkTheme = getInitialTheme(sharedStyles);
        this.lightTheme = getInitialTheme(sharedStyles);
    }

    addColor = (colorName, darkThemeColors, lightThemeColors) => {
        this.darkTheme.color = this.mergeThemeColors(this.darkTheme, colorName, darkThemeColors);
        this.lightTheme.color = this.mergeThemeColors(this.lightTheme, colorName, lightThemeColors);
    }

    getDarkTheme = () => this.darkTheme;

    getLightTheme = () => this.lightTheme;

    mergeThemeColors = (theme, colorName, colorValues) => {
        const {
            primary,
            secondary,
            tertiary,
        } = theme.color;

        return {
            primary: merge(primary, makeColor(colorName, colorValues[0])),
            secondary: merge(secondary, makeColor(colorName, colorValues[1])),
            tertiary: merge(tertiary, makeColor(colorName, colorValues[2])),
        };
    }
}
