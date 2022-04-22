// ./src/components/styled/Global.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        font-family: Verdana, Tahoma, sans-serif;
        background: #F5F5F5;
        /* font-size: 1.6rem; */
    }
`;

export default GlobalStyle;
