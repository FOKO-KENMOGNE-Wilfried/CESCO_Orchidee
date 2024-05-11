import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: poppins, sans-serif;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;