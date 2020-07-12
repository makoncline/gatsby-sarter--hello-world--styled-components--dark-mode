import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root{
  font-size: 18px;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body{
  margin:0;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textHigh};
}
.container{
  display: block;
  margin: auto;
  max-width: 40rem;
  margin: 1rem;
}
.text--high{
  color: ${(props) => props.theme.textHigh};
}
.text--mid{
  color: ${(props) => props.theme.textMid};
}
.text--low{
  color: ${(props) => props.theme.textLow};
}
`;
