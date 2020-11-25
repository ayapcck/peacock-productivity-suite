export default class ThemeCreator {
    constructor(sharedStyles) {
        this.darkTheme = { ...sharedStyles };
        this.lightTheme = { ...sharedStyles };
    }

    addColors = (colorName, darkThemeColor, lightThemeColor) => {
        this.darkTheme[colorName] = darkThemeColor;
        this.lightTheme[colorName] = lightThemeColor;
    }
    getDarkTheme = () => this.darkTheme;
    getLightTheme = () => this.lightTheme;
}
