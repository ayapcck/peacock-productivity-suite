import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import NotesPage from '..';

describe('NotesPage', () => {
    it('should shallowly render without crashing', () => {
        shallow(<NotesPage />);
    });
    it('should render without crashing', () => {
        mount(<NotesPage />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<NotesPage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
