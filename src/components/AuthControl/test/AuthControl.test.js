import React from 'react';
import renderer from 'react-test-renderer';
import {
    mount,
    shallow,
} from 'enzyme';

import AuthControl from '..';
import { addIcons } from '../../../config/fontawesome';
import { withDarkTheme } from '../../../context';

const ThemedAuthControl = withDarkTheme(AuthControl);

beforeAll(() => {
    addIcons();
});

describe('AuthControl', () => {
    it('should shallowly render without crashing', () => {
        shallow(<AuthControl />);
    });
    it('should render without crashing', () => {
        mount(<ThemedAuthControl />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<ThemedAuthControl />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should be able to view Change Password view', () => {
        const wrapper = mount(<ThemedAuthControl useChangePasswordForm={true} />);
        expect(wrapper.find('h2').text()).toEqual('Change Password');
    });
    it('should be able to get to Forgot Password view', () => {
        const wrapper = mount(<ThemedAuthControl />);
        expect(wrapper.find('h2').text()).toEqual('Log In');
        // Forgot password link is first
        wrapper.find('.AuthControl_ChangeFormLink').at(0).simulate('click');
        expect(wrapper.find('h2').text()).toEqual('Forgot Password');
    });
    it('should be able to get to Register view', () => {
        const wrapper = mount(<ThemedAuthControl />);
        expect(wrapper.find('h2').text()).toEqual('Log In');
        // Register link is second
        wrapper.find('.AuthControl_ChangeFormLink').at(2).simulate('click');
        expect(wrapper.find('h2').text()).toEqual('Register');
    });
});
