"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles, darkTheme, lightTheme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode, { DarkModeProvider } from "./DarkModeContext";

const Providers = ({ children }: { children: ReactNode }) => {
  const dark: boolean = true;

  const { isDark} = useDarkMode();

  

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </>
  );
};
export default Providers;
