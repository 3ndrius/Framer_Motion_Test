import React from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
 body {
   padding: 20px;
   box-sizing:border-box;
   margin 0;
   background: white;
   font-family: Montserrat,'Segoe UI', sans-serif ;
   color:black;
   height:100vh;
   max-width:1200px;
   margin:0 auto;
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
   overflow:hidden;
  }
`;
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
