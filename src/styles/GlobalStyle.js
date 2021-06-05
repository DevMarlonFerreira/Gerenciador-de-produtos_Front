import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 100%;
        color: #212121;
        box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 15px;
    }

    a, button {
      font-family: "Poppins", sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {

      strong {
        color: ${(props) => props.theme.colors.primary.main};
      }
    }

    button {
	    background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }

    a {
      text-decoration:none; 
      color: inherit;
    }

    input {
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    outline: inherit;
    }
`;
const GlobalStyledComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyledComposed;
