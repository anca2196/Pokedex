import Bg from "./assets/Background.svg";

const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`

    :root{
        --red: hsl( 0, 62%, 48%);
        --red-hover: hsl( 7, 80%, 49%);
        --orange: hsl( 16, 100%, 70%);
        --blue: hsl(180, 62%, 48%, 0.6);
        --white: hsl()
    }

    html {
        background: url(${Bg}) center / cover no-repeat;
        font-family: 'Montserrat', sans-serif;;
        width: 100vw;
        height: 100vh;
        font-size: 16px;
        box-sizing: border-box;
    }
`