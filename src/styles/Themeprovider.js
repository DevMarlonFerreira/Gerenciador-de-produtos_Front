import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  basic: "basic",
};

const basic = {
  colors: {
    primary: {
      default: "#2FF3E0",
      primary: "#F8D210",
      danger: "#F51720",
      text: "#212121",
    },
    secondary: {
      default: "#C4DBE0",
      primary: "#2EB5E0",
      danger: "#0C6980",
      text: "#00A8A8",
    },
    border: "rgba(0, 0, 0, 0.123)",
  },
};

const allThemes = {
  basic,
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "basic",
};

export default ThemeProvider;
