import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    :root{
        font-size: 62.5%;

        --white: #fff;

        --gray-300: #D9D9D9;

        --green-500: #219C61;
        --green-700: #175C3B;
        --green-900: #012821;
    }

    html,body {
        font-family: 'Poppins', sans-serif;
      }

    a {
        color: inherit;
    }

    button{
        cursor: pointer;
        transition: filter 0.1s;
    
        &:hover {
          filter: brightness(0.9);
        }
    }


`