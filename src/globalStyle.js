import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    --section-background-color: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.582),
      rgba(12, 8, 24, 0.904)
    );
  
    --image-gradient: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.678),
      rgba(12, 10, 22, 0.863)
    );
  
    --imp-text-color: #f0aa70;
  }
  .logo {
    width: 1.5rem;
    height: 1.5rem;
  }
  .purple {
    color: var(--imp-text-color);
  }
  
  button:focus {
    box-shadow: none;
  }


`;

export default GlobalStyle;
