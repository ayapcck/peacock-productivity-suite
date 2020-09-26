export default class ThemeCreator {
    constructor() {
        this.darkTheme = {};
        this.lightTheme = {};
    }

    addColors = (colorName, darkThemeColor, lightThemeColor) => {
        this.darkTheme[colorName] = darkThemeColor;
        this.lightTheme[colorName] = lightThemeColor;
    }
    getDarkTheme = () => this.darkTheme;
    getLightTheme = () => this.lightTheme;
}
