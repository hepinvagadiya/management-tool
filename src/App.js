import React, { Component } from "react";
import { BrowserRouter, Redirect } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Cookies from 'js-cookie';
import Page from "./Component/modules/page";
import { ThemeProvider } from "styled-components";
import themes from './core/setting/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes["dark"]}>
          <GlobalStyle />
          {Cookies.get('mainData') ? <Page /> : <span><AuthRouter /><Redirect to={`/Login`} /></span>}
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}


export default App;
