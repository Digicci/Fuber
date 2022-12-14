import React from "react";
import { createGlobalStyle } from "styled-components";
import colors from "../../colors";

const StyledGobalStyle = createGlobalStyle`
*, 
::before, 
::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    overflow-x: hidden;
    font-family: 'Questrial', sans-serif;
    color: ${colors.secondary};
}

html{
    scroll-behavior: smooth;  
    -webkit-overflow-scrolling: touch;
}


`

function GlobalStyle() {

    return <StyledGobalStyle />
}

export default GlobalStyle