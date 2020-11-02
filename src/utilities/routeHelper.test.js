import { getRouteByPath } from './routeHelper';
import ROUTES from '../constants/routes';

describe('getRouteByPath', () => {
    it('should return correct route for top level path', () => {
        expect(getRouteByPath('/home')).toEqual(ROUTES.HOME);
    });
    it('should return correct route for sub path', () => {
        expect(getRouteByPath('/notes')).toEqual(ROUTES.APPS.NOTES);
    });
});
