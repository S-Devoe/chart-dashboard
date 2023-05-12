"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    /* color: ${({ theme }) => theme.text}; */
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Lato', sans-serif ;
  }

  .primary__text {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.primaryText};
   }

   .bold__text{
    color: ${({ theme }) => theme.primaryText};
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: 0.5px;
   }
`;

export const lightTheme = {
  background: "#FAFAFA",
  navBg: "#fff",
  primaryText: "#2D2D2D",
  secondaryText: "#72777B",
  navIconBg: "#D4F7F2",
  borderColor: "#E7EAEE",
  inputBg: "#FFFFFF",
};
export const darkTheme = {
  background: "#001A33",
  navBg: "#001529",
  primaryText: "#fff",
  secondaryText: "#B8C0CC",
  navIconBg: "#243B53",
  borderColor: "#334E68",
  inputBg: "#243B53",
};
