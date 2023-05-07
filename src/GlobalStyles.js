import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --background: #fff;
        --main-color: #e55472;
        --text-color: #010101;
        --2nd-color: #434343;
        --other-color: #666666;
        --big-font: 5rem;
        --h2-font: 2.3rem;
        --p-font: 1.3rem;
    }

    #root {
        min-height: 100vh;
        background-color: var(--background);
        color: var(--text-color);
    }

    img, a {
        display: inline-block;
    }

    .header {
        text-align: center;
    }

    .header h2 {
        font-size: 2.3rem;
        font-weight: 700;
        text-transform: capitalize;
        line-height: 1;

        @media (max-width: 380px) {
            font-size: 1.6rem;
        }
    }

    section {
        width: 100%;
        padding: 80px 14% 90px;

        @media (max-width: 1277px) {
            padding: 80px 2%;
        }
    }

`