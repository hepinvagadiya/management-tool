import React, { useEffect, useRef } from "react";
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Page from "./Component/modules/page";
import { ThemeProvider } from "styled-components";
import themes from './core/setting/';

export const App = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current = sessionStorage.getItem('current') ? null : sessionStorage.setItem('current', 0);
  });
  
  return (
    <span className="hepin">
      <BrowserRouter>
        {ref.current}
        <ThemeProvider theme={themes["dark"]}>
          <GlobalStyle />
          {sessionStorage.getItem('Login') ? <span><Page /></span> : <span><AuthRouter /></span>}
        </ThemeProvider>
      </BrowserRouter>
    </span>
  );  
}

export default App;
