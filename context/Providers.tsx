"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles, darkTheme, lightTheme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const Providers = ({ children }: { children: ReactNode }) => {
  const dark: boolean = false;

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </>
  );
};
export default Providers;
