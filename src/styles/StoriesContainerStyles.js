import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
`;

export const AppHeader = styled.h1`
    text-align: center;
`;

export const StoriesContainerWrapper = styled.main`
    max-width: 1140px;
    padding: 20px 15px;
    margin: auto;
`;
