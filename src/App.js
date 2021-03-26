import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Confirm from "./pages/Confirm";
import styled from "styled-components";
const App = () => {

  return (
    <GlobalStyleWrap>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/confirm" component={Confirm} />
        </Switch>
      </Router>
    </GlobalStyleWrap>
  );
};

const GlobalStyleWrap = styled.div`
  .label {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
    color: #1e1e1e;
    
  }
`;

export default App;
