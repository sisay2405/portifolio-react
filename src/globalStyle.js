import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    // background-color: #fefefe;
    // color: #333;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      width: 150px;
    }
  }
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background-color: #0c0513;
    background-image: url(./Assets/pre.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .preloader-none {
    opacity: 0;
  }
`;

export default GlobalStyle;
