import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from "./Component/modules/auth/authRouter";
import { GlobalStyle } from "./global";
import Page from "./Component/modules/page";
import { ThemeProvider } from "styled-components";
import themes from './core/setting/';
import { useSelector } from 'react-redux';

export const App = () => {
  const ref = React.useRef();
  // const user = useSelector(state => state)
  // useEffect(() => {
  //   console.log(user.auth.auth.status, "authentication")
  // }, [user])

  useEffect(() => {
    ref.current = sessionStorage.getItem('current') ? null : sessionStorage.setItem('current', 0);
  });

  return (
    <BrowserRouter>
      {ref.current}
      <ThemeProvider theme={themes["dark"]}>
        <GlobalStyle />
        {sessionStorage.getItem('Login') ? <span><Page /></span> : <span><AuthRouter /></span>}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
