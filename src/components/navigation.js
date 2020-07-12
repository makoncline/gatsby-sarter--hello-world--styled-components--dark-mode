import React from "react";
import DarkModeToggle from "./darkModeToggle";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Style>
      <div className="logo">
        <span>Logo or title</span>
      </div>
      <div className="dark-toggle">
        <DarkModeToggle />
      </div>
    </Style>
  );
}
const Style = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin-left: 1rem;
    span {
      margin: 0;
    }
  }
  .dark-toggle {
    margin-right: 1rem;
    right: 0;
    align-self: center;
  }
`;
