import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import { AuthUserContext } from '../../../config/session';
import { FirebaseContext } from '../../../config/firebase';
import Navigation from '..';

import MockFirebase from '../../../__mocks__/Firebase';
import { Admin, Guest } from '../../../__mocks__/Users';

const mockedFirebase = MockFirebase();
// const signOutSpy = jest.spyOn(mockedFirebase, 'signOut')
//     .mockImplementation(() => true);

let Container;

const updateContainer = (role, userPermissions) => {
    const authUser = {
        user: { role },
        userPermissions: userPermissions,
    };
    const history = createMemoryHistory();
    
    Container = () => (
        <FirebaseContext.Provider value={mockedFirebase}>
            <AuthUserContext.Provider value={authUser}>
                <Router history={history} initialEntries={[ '/' ]}>
                    <Navigation />
                </Router>
            </AuthUserContext.Provider>
        </FirebaseContext.Provider>
    );
};

const mountAndClickPopupLink = () => {
    const wrapper = mount(<Container />);
    wrapper.find('.Navigation_StyledPopupLink').at(0).simulate('click');
    return wrapper;
};

const testCases = [
    {
        // Clicking StyledPopupLink executes signOut function
        clickLinkTest: () => {
            mountAndClickPopupLink();
            expect(mockedFirebase.signOut).toHaveBeenCalled();
        },
        user: Admin,
    },
    {
        // Clicking StyledPopupLink executes displayAuthControl
        clickLinkTest: () => {
            mountAndClickPopupLink();
        },
        user: Guest,
    },
];

testCases.forEach(test => {
    const { clickLinkTest,  user } = test;
    const { name, permissions, role } = user;

    describe(`Navigation - ${name}`, () => {
        beforeAll(() => {
            updateContainer(role, permissions);
        });

        it('should shallowly render without crashing', () => {
            shallow(<Navigation />);
        });
        it('should render without crashing', () => {
            mount(<Container />);
        });
        it('should be able to click popup link', () => {
            clickLinkTest();
        });
        it('should match snapshot', () => {
            const tree = renderer
                .create(<Container />)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
