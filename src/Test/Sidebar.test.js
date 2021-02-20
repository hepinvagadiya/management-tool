import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/Redux/store'
import { ThemeProvider } from 'styled-components';
import themes from '../core/setting/';
import SideBar from '../Component/Layout/Sidebar/sidebar';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe("SideBar component", () => {
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
    it("SideBar.js", () => {
        const testRenderer = mount(<BrowserRouter><Provider store={store}><ThemeProvider theme={themes["dark"]}><SideBar /></ThemeProvider></Provider></BrowserRouter>);
        const testInstance = testRenderer.root;
        expect(testInstance).toBeTruthy();
    });
});
