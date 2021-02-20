import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/Redux/store'
import { ThemeProvider } from 'styled-components';
import themes from '../core/setting/';
import Topbar from '../Component/Layout/Header/header';
import { mount } from 'enzyme';

describe("Header component", () => {
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
    it("Header.js", () => {
        const testRenderer = mount(<Provider store={store}><ThemeProvider theme={themes["dark"]}><Topbar /></ThemeProvider></Provider>);
        const testInstance = testRenderer.root;
        expect(testInstance).toBeTruthy();
    });
});
