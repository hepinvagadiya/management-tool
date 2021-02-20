import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/Redux/store'
import { ThemeProvider } from 'styled-components';
import themes from '../core/setting/';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import NewPw from '../Component/modules/auth/Signin/Newpassword/newpass';

describe('Login check', () => {
    beforeAll(() => {
        window.matchMedia = (query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
            Submit: jest.fn(),
        })
    });
    it("Change password", async () => {
        const wrapper = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={themes["dark"]}>
                        <NewPw />
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        );
        wrapper.find("input[name='username']").simulate('change', { target: { value: 'hepinvagdiya' } });
        wrapper.find("input[name='newpassword']").simulate('change', { target: { value: 'hepin' } });
        wrapper.find("input[name='confirmpassword']").simulate('change', { target: { value: 'hepin' } });
        wrapper.find("form").simulate("submit");
        expect(wrapper).toBeTruthy();
    });
});
