import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    *::-webkit-scrollbar {
        /* width: 10px; */
        height: 10px;
    }
    
    *::-webkit-scrollbar-track {
        background: #2271D12B;
        border-radius: 20px;
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: #2271D1;
        border-radius: 20px;
        border: 5px double #014291;
        cursor: pointer;
    }

    body {
        font-family: "Roboto", serif;
        background-color: #585858;
    }

    ul {
        list-style: none;
    }

`

export default GlobalStyles
