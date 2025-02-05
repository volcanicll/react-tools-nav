import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import "antd/dist/reset.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Press Start 2P', cursive;
    image-rendering: pixelated;
  }

  * {
    box-sizing: border-box;
  }

  .nes-container {
    position: relative;
    border-style: solid;
    border-width: 4px;
    border-color: #000;
    border-radius: 0;
    margin: 6px;
    padding: 1.5rem 2rem;
    background-color: #fff;

    &::after {
      content: '';
      position: absolute;
      top: -7px;
      left: -7px;
      right: -7px;
      bottom: -7px;
      border: 2px solid #fff;
      pointer-events: none;
    }
  }

  .ant-card {
    border-radius: 0;
    border: 4px solid #000;
    box-shadow: none;

    &::after {
      content: '';
      position: absolute;
      top: -7px;
      left: -7px;
      right: -7px;
      bottom: -7px;
      border: 2px solid #fff;
      pointer-events: none;
    }
  }

  .ant-btn {
    border-radius: 0;
    border: 2px solid #000;
    font-family: 'Press Start 2P', cursive;
  }

  .ant-select {
    .ant-select-selector {
      border-radius: 0 !important;
      border: 2px solid #000 !important;
    }
  }

  .ant-tag {
    border-radius: 0;
    border: 2px solid #000;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
