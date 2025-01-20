import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        font-family: "Roboto", serif;
    }

    ul {
        list-style: none;
    }

`

export default GlobalStyles
