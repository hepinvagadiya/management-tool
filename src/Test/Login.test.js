import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/Redux/store'
import { ThemeProvider } from 'styled-components';
import themes from '../core/setting/';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import SignIn from '../Component/modules/auth/Signin/signin';
import moxios from 'moxios'
import Authentication from '../core/Redux/auth/authAction'

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
    it("Login", async () => {
        const wrapper = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={themes["dark"]}>
                        <SignIn />
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        );
        wrapper.find("input[id='username']").simulate('change', { target: { value: 'hepin' } });
        wrapper.find("input[id='password']").simulate('change', { target: { value: 'hepin' } });
        wrapper.find("form").simulate("submit");
        expect(wrapper).toBeTruthy();
    });
});
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
        })
    });
    it('Authentication Action', () => {
        const user = [{ code: 200 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status: 200, response: user })
        })
        console.log(store.dispatch(Authentication()))
        // store.dispatch(authAction().then(() => {
        //     const actionCalled = store.getActions();
        //     expect(actionCalled.auth.code).toEqual(user);
        // }))
    });
});