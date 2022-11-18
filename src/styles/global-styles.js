import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

    *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }
    html{
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    h1,h2,h3,h4,h5,h6 {

      font-family:${({ theme }) => theme.font.family.default};
    }
    a{
      text-decoration: none; /* no underline */
    }
    
    
    body{
      font-family: "PT Sans", sans-serif;
      font-size: 1.6rem;
      height: 200vh;
      width: 100%;
      position: relative;
      background: ${theme.mainBg};
      
    }
    
  
    .mobile{
      display: none;
      
    }
    @media ${theme.media.medium}{
      .mobile{
        display: block;
        position: fixed;
        width: 100%;
        bottom: 0;

      }
   
     .page{
       
     }

   }
 `;
