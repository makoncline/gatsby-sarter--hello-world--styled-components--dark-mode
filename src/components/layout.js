import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <div className="container">
        <div className="content">{children}</div>
      </div>
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
  display: flex;
  justify-content: center;
  width:100%;
}
.content{
  width:100%;
  max-width: 35rem;
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
