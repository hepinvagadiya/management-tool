import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/Redux/store'
import { ThemeProvider } from 'styled-components';
import themes from '../core/setting/';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Otp from '../Component/modules/auth/Signin/OTP/otp';

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
    it("GetOtp", async () => {
        const wrapper = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={themes["dark"]}>
                        <Otp />
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        );
        wrapper.find("Input[name='otp']").simulate('change', { target: { value: '123123' } });
        wrapper.find("form").simulate("submit");
        expect(wrapper).toBeTruthy();
    });
});
