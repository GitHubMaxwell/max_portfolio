import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import "./style/main.scss";
// import App from "./components/App";

//code-splitting
import(/* webpackChunkName: 'app' */ "./components/App.js").then(
  ({ default: App }) => render(<App />, document.getElementById("root"))
);
