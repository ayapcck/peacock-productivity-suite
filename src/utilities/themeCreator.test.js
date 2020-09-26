import ThemeCreator from './themeCreator';

describe('ThemeCreator', () => {
    let themeCreator = null;
    beforeEach(() => {
        themeCreator = new ThemeCreator();
    });
    
    it('should add a color', () => {
        themeCreator.addColors('test', '#ffffff', '#000000');
        expect(themeCreator.getDarkTheme()).toEqual({ test: '#ffffff' });
        expect(themeCreator.getLightTheme()).toEqual({ test: '#000000' });
    });
});