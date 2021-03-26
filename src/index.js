import React from "react";
import Helmet from "react-helmet";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <>
    <Helmet>
      <title>제작중 입니다.</title>
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
