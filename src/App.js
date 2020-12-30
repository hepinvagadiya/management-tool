import React, { Component } from "react";
import { BrowserRouter, Redirect } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Cookies from 'js-cookie';
import Page from "./Component/modules/page";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BrowserRouter>
          <GlobalStyle />
          {Cookies.get('mainData') ? <Page/> : <span><AuthRouter /><Redirect to={`/Login`}/></span>}
      </BrowserRouter>
    );
  }
}


export default App;
