import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import {
  ThemeManagerContext,
  ThemeSetting,
} from "gatsby-styled-components-dark-mode";
import { Icon } from "@iconify/react";
import sunIcon from "@iconify/icons-oi/sun";
import moonFill from "@iconify/icons-eva/moon-fill";

export default function DarkModeToggle() {
  const themeContext = useContext(ThemeManagerContext);
  useEffect(() => themeContext.changeThemeSetting(ThemeSetting.SYSTEM), []); // eslint-disable-line
  return (
    <Button
      onClick={() =>
        themeContext.changeThemeSetting(
          themeContext.isDark ? ThemeSetting.LIGHT : ThemeSetting.DARK
        )
      }
    >
      {themeContext.isDark ? <Icon icon={sunIcon} /> : <Icon icon={moonFill} />}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  width: 48px;
  height: 48px;
  color: ${(props) => props.theme.textHigh};
  font-size: 36px;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
