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
        --black-500: #282a36;
        --black-300: #636262;
        --gray-300: #D9D9D9;

        --green-300: #43cc8a;
        --green-500: #219C61;
        --green-700: #175C3B;
        --green-900: #012821;

        --blue-900: #1b223f;
        
        --red-200: #fda3a3;
        --red-600: #A72828;
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