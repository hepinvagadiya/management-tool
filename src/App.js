import React, { Component } from "react";
import { GlobalStyle } from "./global";
import  Signin from "./Component/modules/auth/Signin/signin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="App">
          <GlobalStyle />
          <Signin />
      </div>
    );
  }
}


export default App;
