import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import { addIcons } from '../../../config/fontawesome';
import { AuthUserContext } from '../../../config/session';
import { FirebaseContext } from '../../../config/firebase';
import { withDarkTheme } from '../../../logics';
import NavigationMenu from '..';

import MockFirebase from '../../../__mocks__/Firebase';
import { Admin, Guest } from '../../../__mocks__/Users';

const mockedFirebase = MockFirebase();
const ThemedNavigation = withDarkTheme(NavigationMenu);

beforeAll(() => {
    addIcons();
});

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
                <Router
                    history={history}
                    initialEntries={[ '/' ]}
                >
                    <ThemedNavigation />
                </Router>
            </AuthUserContext.Provider>
        </FirebaseContext.Provider>
    );
};

const mountAndClickPopupLink = () => {
    const wrapper = mount(<Container />);
    wrapper.find('.Navigation_LoginRegisterLink').at(0).simulate('click');
    return wrapper;
};

const testCases = [
    {
        // Clicking LoginRegisterLink executes signOut function
        clickLinkTest: () => {
            mountAndClickPopupLink();
            expect(mockedFirebase.signOut).toHaveBeenCalled();
        },
        user: Admin,
    },
    {
        // Clicking LoginRegisterLink executes displayAuthControl
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
            shallow(<NavigationMenu />);
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
