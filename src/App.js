import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Page from "./Component/modules/page";
import { ThemeProvider } from "styled-components";
import themes from './core/setting/';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes["dark"]}>
        <GlobalStyle />
        {localStorage.getItem('Login') ? <span><Page /></span> : <span><AuthRouter /></span>}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
