import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Page from "./Component/modules/page";
import { ThemeProvider } from "styled-components";
import themes from './core/setting/';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes["dark"]}>
          <GlobalStyle />
          {localStorage.getItem('Login') ? <Page /> : <span><AuthRouter /></span>}
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}


export default App;
