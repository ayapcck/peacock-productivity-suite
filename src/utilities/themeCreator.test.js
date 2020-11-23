import ThemeCreator from './themeCreator';

describe('ThemeCreator', () => {
    let themeCreator = null;
    beforeEach(() => {
        themeCreator = new ThemeCreator({});
    });
    
    it('should add a color', () => {
        themeCreator.addColors('test', '#ffffff', '#000000');
        expect(themeCreator.getDarkTheme()).toEqual({ test: '#ffffff' });
        expect(themeCreator.getLightTheme()).toEqual({ test: '#000000' });
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
