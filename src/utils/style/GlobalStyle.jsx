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

#root{
    width: 100%;
    height: 100vh;
}

html{
    scroll-behavior: smooth;  
    -webkit-overflow-scrolling: touch;
}

.rotateY{
    transform: rotateY(360deg);
    transition: transform 1s;
}

.animated{
    animation: animated 1s;
}

@keyframes animated{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

`

function GlobalStyle() {

    return <StyledGobalStyle />
}

export default GlobalStyle