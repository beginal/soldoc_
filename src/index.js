import React from "react";
import Helmet from "react-helmet";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
    <link href="./public/favicon.ico" rel="shortcut icon" />
      <title>솔닥 - 진료 예약</title>
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
