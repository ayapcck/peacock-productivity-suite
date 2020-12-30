import ThemeCreator from './themeCreator';

describe('ThemeCreator', () => {
    let themeCreator = null;
    beforeEach(() => {
        themeCreator = new ThemeCreator({});
    });

    it('should add a color', () => {
        const darkThemeColors = [ '#000000', '#000001', '#000002' ];
        const lightThemeColors = [ '#ffffff', '#fffffe', '#fffffd' ];
        themeCreator.addColor('test', darkThemeColors, lightThemeColors);

        const darkTheme = themeCreator.getDarkTheme().color;
        const lightTheme = themeCreator.getLightTheme().color;
        expect(darkTheme.primary).toEqual({ test: '#000000' });
        expect(darkTheme.secondary).toEqual({ test: '#000001' });
        expect(darkTheme.tertiary).toEqual({ test: '#000002' });
        expect(lightTheme.primary).toEqual({ test: '#ffffff' });
        expect(lightTheme.secondary).toEqual({ test: '#fffffe' });
        expect(lightTheme.tertiary).toEqual({ test: '#fffffd' });
    });
    it('should be able to add sharedStyles', () => {
        const sharedStyles = {
            border: {
                radius: '5px',
                style: 'solid',
            },
        };
        const themeCreatorWithSharedStyles = new ThemeCreator(sharedStyles);
        expect(themeCreatorWithSharedStyles.getDarkTheme().border.radius).toEqual('5px');
        expect(themeCreatorWithSharedStyles.getDarkTheme().border.style).toEqual('solid');
    });
});
